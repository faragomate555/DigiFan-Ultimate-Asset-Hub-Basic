# 🤖 DigiFan Ultimate Asset Hub - v1.0.0 (Official Release)

![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge)
![Discord.js](https://img.shields.io/badge/Discord.js-v14+-5865F2?style=for-the-badge&logo=discord&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Build](https://img.shields.io/badge/Build-Operational-brightgreen?style=for-the-badge)

> **"A minőség nem opció, hanem alapfelszereltség."** – *Coding by DigiFan*

Üdvözöllek a **DigiFan Ultimate Asset Hub** világában! Ez nem csupán egy egyszerű bot kódja, hanem egy professzionális szintű, moduláris keretrendszer, amelyet arra fejlesztettem ki, hogy stabil és skálázható alapot biztosítson bármilyen Discord közösség számára. Legyen szó moderációról, közösségépítésről vagy technikai támogatásról, ez a csomag mindent tartalmaz.

---

## 💎 Miért válaszd a DigiFan Asset Hub-ot?

Ebben a projektben a tiszta kód (Clean Code) elveit követtem, ötvözve a legmodernebb Discord.js funkciókkal. Minden üzenet, esemény és parancs tartalmazza a **"Coding by DigiFan"** minőségi jelzést, biztosítva a felhasználókat a forrás hitelességéről.

---

## ✨ Kiemelt Funkciók

### 📈 Professzionális XP & Leveling Rendszer
* **Adatbiztonság:** Beépített SQLite (`better-sqlite3`) adatbázis kezelés, amely villámgyors és megbízható.
* **Automatizáció:** A rendszer automatikusan figyeli a chat aktivitást, és szintlépéskor látványos, vízjelezett üzenettel értesíti a felhasználót.
* **Skálázhatóság:** A szintekhez szükséges tapasztalati pontok (XP) dinamikusan változnak a szint növekedésével.

### 🎫 Fejlett Ticket (Support) Rendszer
* **Gomb-alapú interakció:** Nincs szükség bonyolult parancsokra; egyetlen gombnyomással privát csatorna nyitható.
* **Intelligens jogosultságkezelés:** A bot automatikusan beállítja a láthatóságot, így csak a felhasználó és a vezetőség látja a beszélgetést.
* **Branding:** Egyedi support-embedek "Support System | Coding by DigiFan" lábléccel.

### 🛠️ Dinamikus Handler Rendszer
* **Moduláris felépítés:** A parancsok és események külön mappákban (`/commands`, `/events`) helyezkednek el.
* **Auto-Load:** Új funkció hozzáadásakor elég csak a fájlt létrehozni, a bot automatikusan felismeri és regisztrálja azt indításkor.

### 🛡️ Moderációs Suite
* **Biztonság:** Slash command alapú `/ban` és `/kick` parancsok beépített jogosultság-ellenőrzéssel.
* **Naplózás:** Konzol alapú visszajelzés minden fontos eseményről a bot felügyeletéhez.

---

## 🚀 Telepítési Útmutató

### Előfeltételek
* **Node.js** v16.9.0 vagy újabb verzió.
* **NPM** (Node Package Manager).
* Egy létrehozott bot a [Discord Developer Portal](https://discord.com/developers/applications)-on.

### Lépések

1.  **Tároló letöltése (Clone):**
    ```bash
    git clone [https://github.com/felhasznalonev/digifan-asset-hub.git](https://github.com/felhasznalonev/digifan-asset-hub.git)
    cd digifan-asset-hub
    ```

2.  **Szükséges modulok telepítése:**
    ```bash
    npm install discord.js dotenv better-sqlite3
    ```

3.  **Környezeti változók (.env) beállítása:**
    Hozz létre egy `.env` fájlt a gyökérmappában az alábbi adatokkal:
    ```env
    DISCORD_TOKEN=A_TE_BOT_TOKENED
    CLIENT_ID=A_BOTOD_APPLICATION_ID-JA
    ```

4.  **Parancsok regisztrálása (Slash Command Deploy):**
    ```bash
    node deploy-commands.js
    ```

5.  **A Bot indítása:**
    ```bash
    node src/index.js
    ```

---

## 📂 Projekt Felépítése (Mappa Struktúra)

```text
digifan-bot/
├── src/
│   ├── commands/       # Parancsok kategóriákra bontva (admin, general)
│   ├── events/         # Eseménykezelők (ready, interactionCreate, messageCreate)
│   ├── utils/          # Segédfunkciók és Adatbázis (db.js)
│   └── index.js        # A bot központi "szíve"
├── .env                # Titkos adatok (Token, Client ID)
├── database.sqlite     # Automatikusan generált adatbázis fájl
├── deploy-commands.js  # Parancsregisztráló script
├── package.json        # Függőségek és metaadatok
└── README.md           # Ez a dokumentum
