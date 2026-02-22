const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setup-ticket')
        .setDescription('Ticket rendszer inicializálása')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🎫 Segítségközpont')
            .setDescription('Kattints az alábbi gombra, ha segítségre van szükséged vagy jelenteni szeretnél valamit!')
            .setFooter({ text: 'Ticket System | Coding by DigiFan' })
            .setColor('#2F3136');

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('open_ticket')
                .setLabel('Ticket Nyitása')
                .setEmoji('📩')
                .setStyle(ButtonStyle.Primary),
        );

        await interaction.reply({ embeds: [embed], components: [row] });
    },
};