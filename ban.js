const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Felhasználó kitiltása a szerverről.')
        .addUserOption(option => option.setName('target').setDescription('Kit tiltsunk ki?').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('Indoklás'))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),

    async execute(interaction) {
        const target = interaction.options.getUser('target');
        const reason = interaction.options.getString('reason') || 'Nincs megadva indok.';

        await interaction.guild.members.ban(target, { reason });

        const banEmbed = new EmbedBuilder()
            .setColor('#FF0000')
            .setTitle('🚫 Felhasználó Kitiltva')
            .addFields(
                { name: 'Célszemély', value: `${target.tag}`, inline: true },
                { name: 'Moderátor', value: `${interaction.user.tag}`, inline: true },
                { name: 'Indok', value: reason }
            )
            .setFooter({ text: 'Security System | Coding by DigiFan' })
            .setTimestamp();

        await interaction.reply({ embeds: [banEmbed] });
    },
};