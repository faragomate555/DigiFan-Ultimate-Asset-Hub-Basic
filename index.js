const { Client, GatewayIntentBits, Collection, EmbedBuilder, ChannelType, PermissionFlagsBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { addXP } = require('./utils/db');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

// Gyűjtemények inicializálása
client.commands = new Collection();

// --- DINAMIKUS COMMAND HANDLER ---
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command);
        }
    }
}

// --- ESEMÉNYEK KEZELÉSE ---

// 1. Üzenet esemény (XP rendszer)
client.on('messageCreate', async (message) => {
    if (message.author.bot || !message.guild) return;

    const { leveledUp, level } = addXP(message.author.id);
    if (leveledUp) {
        message.reply({ 
            content: `Gratulálok ${message.author}! Szintet léptél! Új szinted: **${level}** 🆙\n*Coding by DigiFan*` 
        });
    }
});

// 2. Interakciók (Slash Command & Gombok)
client.on('interactionCreate', async (interaction) => {
    // Slash parancsok
    if (interaction.isChatInputCommand()) {
        const command = client.commands.get(interaction.commandName);
        if (!command) return;
        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Hiba a futtatáskor! | Coding by DigiFan', ephemeral: true });
        }
    }

    // Ticket Gomb kezelése
    if (interaction.isButton()) {
        if (interaction.customId === 'open_ticket') {
            const channel = await interaction.guild.channels.create({
                name: `ticket-${interaction.user.username}`,
                type: ChannelType.GuildText,
                permissionOverwrites: [
                    { id: interaction.guild.id, deny: [PermissionFlagsBits.ViewChannel] },
                    { id: interaction.user.id, allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages] },
                ],
            });

            const ticketEmbed = new EmbedBuilder()
                .setTitle('Szia! Miben segíthetünk?')
                .setDescription('A vezetőség hamarosan jelentkezik. Addig kérlek írd le a problémád!')
                .setFooter({ text: 'Support System | Coding by DigiFan' })
                .setColor('#00FF00');

            await channel.send({ embeds: [ticketEmbed] });
            await interaction.reply({ content: `Ticket megnyitva: ${channel}`, ephemeral: true });
        }
    }
});

// 3. Ready esemény
client.once('ready', () => {
    console.log('==========================================');
    console.log(`| v1.0.0 Loaded Successfully             |`);
    console.log(`| Logged in as: ${client.user.tag}       |`);
    console.log(`| Status: Coding by DigiFan              |`);
    console.log('==========================================');
    
    client.user.setActivity('Coding by DigiFan', { type: 3 }); // Watching status
});

client.login(process.env.DISCORD_TOKEN);