const { Client, GatewayIntentBits, Collection, EmbedBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
require('dotenv').config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

// Parancsok gyűjteménye
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    client.commands.set(command.data.name, command);
}

// Interakció kezelő (Vízjellel a hibakezelésnél)
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ 
            content: 'Hiba történt a parancs futtatása közben! | Coding by DigiFan', 
            ephemeral: true 
        });
    }
});

client.once('ready', () => {
    console.log('--------------------------');
    console.log(`🚀 ${client.user.tag} online!`);
    console.log('🛡️  System: Operational');
    console.log('💎  Status: Coding by DigiFan');
    console.log('--------------------------');
});

client.login(process.env.DISCORD_TOKEN);