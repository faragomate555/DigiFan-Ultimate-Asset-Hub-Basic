const { ActivityType } = require('discord.js');

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        const activities = [
            'Coding by DigiFan',
            `${client.guilds.cache.size} szerveren figyelek`,
            '/help parancsot várom'
        ];

        let i = 0;
        setInterval(() => {
            client.user.setActivity(activities[i++ % activities.length], { type: ActivityType.Watching });
        }, 15000);

        console.log(`✅ ${client.user.tag} készen áll! | Coding by DigiFan`);
    },
};