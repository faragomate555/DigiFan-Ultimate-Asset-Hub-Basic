const Database = require('better-sqlite3');
const db = new Database('database.sqlite');

// Táblák létrehozása
db.prepare(`CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, xp INTEGER DEFAULT 0, level INTEGER DEFAULT 1)`).run();

module.exports = {
    addXP: (userId) => {
        const user = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
        if (!user) {
            db.prepare('INSERT INTO users (id, xp, level) VALUES (?, ?, ?)').run(userId, 10, 1);
            return { leveledUp: false };
        }
        
        let newXP = user.xp + 10;
        let newLevel = user.level;
        let leveledUp = false;

        if (newXP >= newLevel * 100) {
            newXP = 0;
            newLevel++;
            leveledUp = true;
        }

        db.prepare('UPDATE users SET xp = ?, level = ? WHERE id = ?').run(newXP, newLevel, userId);
        return { leveledUp, level: newLevel };
    }
};