const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Szerver és Bot információk'),
    async execute(interaction) {
        const infoEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Szerver Információs Panel')
            .addFields(
                { name: 'Szerver név', value: `${interaction.guild.name}`, inline: true },
                { name: 'Tagok száma', value: `${interaction.guild.memberCount}`, inline: true }
            )
            // Itt a DigiFan vízjel az Embed alján
            .setFooter({ 
                text: 'Coding by DigiFan • 2026', 
                iconURL: interaction.client.user.displayAvatarURL() 
            })
            .setTimestamp();

        await interaction.reply({ embeds: [infoEmbed] });
    },
};