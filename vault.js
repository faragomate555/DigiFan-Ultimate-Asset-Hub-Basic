const { EmbedBuilder } = require('discord.js');

module.exports = {
    createDigiEmbed: (title, description, color = 0x5865F2) => {
        return new EmbedBuilder()
            .setTitle(title)
            .setDescription(description)
            .setColor(color)
            .setThumbnail('https://i.imgur.com/link-to-your-logo.png') // Opcionális logó
            .setFooter({ text: 'Bot Framework v0.9.0 | Coding by DigiFan' })
            .setTimestamp();
    }
};