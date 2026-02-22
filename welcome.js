module.exports = {
    name: 'guildMemberAdd',
    execute(member) {
        const channel = member.guild.channels.cache.find(ch => ch.name === 'üdvözlet');
        if (!channel) return;
        channel.send(`Szia ${member}! Érezd jól magad nálunk! 🚀`);
    },
};