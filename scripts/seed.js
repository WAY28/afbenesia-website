// ============================================================
// Seed script — Migrate JSON data to SQLite using sql.js
// Run: node scripts/seed.js
// ============================================================

const initSqlJs = require("sql.js");
const path = require("path");
const fs = require("fs");

const DB_PATH = path.join(__dirname, "..", "data", "afbenesia.db");
const DATA_DIR = path.join(__dirname, "..", "data");

async function main() {
    // Delete existing DB
    if (fs.existsSync(DB_PATH)) {
        fs.unlinkSync(DB_PATH);
        console.log("Deleted existing database");
    }

    const SQL = await initSqlJs();
    const db = new SQL.Database();

    // Create tables
    db.run(`
        CREATE TABLE IF NOT EXISTS services (
            id TEXT PRIMARY KEY, icon TEXT NOT NULL DEFAULT '🤖',
            title TEXT NOT NULL, titleEn TEXT NOT NULL,
            tag TEXT, tagEn TEXT,
            desc TEXT NOT NULL, descEn TEXT NOT NULL,
            features TEXT NOT NULL DEFAULT '[]', featuresEn TEXT NOT NULL DEFAULT '[]',
            active INTEGER NOT NULL DEFAULT 1,
            createdAt TEXT NOT NULL DEFAULT (datetime('now'))
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS portfolio (
            slug TEXT PRIMARY KEY, title TEXT NOT NULL, titleEn TEXT NOT NULL,
            category TEXT NOT NULL, result TEXT NOT NULL, resultEn TEXT NOT NULL,
            desc TEXT NOT NULL, descEn TEXT NOT NULL,
            tags TEXT NOT NULL DEFAULT '[]',
            active INTEGER NOT NULL DEFAULT 1,
            createdAt TEXT NOT NULL DEFAULT (datetime('now'))
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS blog (
            slug TEXT PRIMARY KEY, category TEXT NOT NULL, categoryEn TEXT NOT NULL,
            title TEXT NOT NULL, titleEn TEXT NOT NULL,
            excerpt TEXT NOT NULL DEFAULT '', excerptEn TEXT NOT NULL DEFAULT '',
            content TEXT NOT NULL DEFAULT '', contentEn TEXT NOT NULL DEFAULT '',
            date TEXT NOT NULL DEFAULT '', dateEn TEXT NOT NULL DEFAULT '',
            readTime TEXT NOT NULL DEFAULT '5',
            featured INTEGER NOT NULL DEFAULT 0, active INTEGER NOT NULL DEFAULT 1,
            createdAt TEXT NOT NULL DEFAULT (datetime('now'))
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS training (
            slug TEXT PRIMARY KEY, badge TEXT NOT NULL DEFAULT '', badgeEn TEXT NOT NULL DEFAULT '',
            title TEXT NOT NULL, desc TEXT NOT NULL, descEn TEXT NOT NULL,
            duration TEXT NOT NULL DEFAULT '', durationEn TEXT NOT NULL DEFAULT '',
            level TEXT NOT NULL DEFAULT '', levelEn TEXT NOT NULL DEFAULT '',
            price TEXT NOT NULL DEFAULT '', priceEn TEXT NOT NULL DEFAULT '',
            cert TEXT NOT NULL DEFAULT '', certEn TEXT NOT NULL DEFAULT '',
            highlights TEXT NOT NULL DEFAULT '[]', highlightsEn TEXT NOT NULL DEFAULT '[]',
            emoji TEXT NOT NULL DEFAULT '🎓', active INTEGER NOT NULL DEFAULT 1,
            createdAt TEXT NOT NULL DEFAULT (datetime('now'))
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS testimonials (
            id TEXT PRIMARY KEY, name TEXT NOT NULL,
            role TEXT NOT NULL DEFAULT '', roleEn TEXT NOT NULL DEFAULT '',
            text TEXT NOT NULL, textEn TEXT NOT NULL,
            avatar TEXT NOT NULL DEFAULT '', rating INTEGER NOT NULL DEFAULT 5,
            active INTEGER NOT NULL DEFAULT 1,
            createdAt TEXT NOT NULL DEFAULT (datetime('now'))
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS partners (
            id TEXT PRIMARY KEY, name TEXT NOT NULL,
            abbr TEXT NOT NULL DEFAULT '', logo TEXT NOT NULL DEFAULT '',
            active INTEGER NOT NULL DEFAULT 1,
            createdAt TEXT NOT NULL DEFAULT (datetime('now'))
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS team (
            id TEXT PRIMARY KEY, name TEXT NOT NULL,
            role TEXT NOT NULL DEFAULT '', roleEn TEXT NOT NULL DEFAULT '',
            initials TEXT NOT NULL DEFAULT '', desc TEXT NOT NULL DEFAULT '',
            descEn TEXT NOT NULL DEFAULT '', active INTEGER NOT NULL DEFAULT 1,
            createdAt TEXT NOT NULL DEFAULT (datetime('now'))
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS about (
            id INTEGER PRIMARY KEY,
            vision TEXT NOT NULL DEFAULT '', visionEn TEXT NOT NULL DEFAULT '',
            missions TEXT NOT NULL DEFAULT '[]', missionsEn TEXT NOT NULL DEFAULT '[]',
            "values" TEXT NOT NULL DEFAULT '[]', timeline TEXT NOT NULL DEFAULT '[]',
            achievements TEXT NOT NULL DEFAULT '[]',
            updatedAt TEXT NOT NULL DEFAULT (datetime('now'))
        )
    `);

    console.log("Tables created successfully");

    // Helper to parse JSON file
    function readJson(filename) {
        const filePath = path.join(DATA_DIR, filename);
        if (!fs.existsSync(filePath)) {
            console.log(`File ${filename} not found, skipping`);
            return null;
        }
        return JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }

    const J = (val) => (Array.isArray(val) ? JSON.stringify(val) : val);

    // Seed services
    const services = readJson("services.json");
    if (services && Array.isArray(services)) {
        const stmt = db.prepare(`INSERT INTO services (id, icon, title, titleEn, tag, tagEn, desc, descEn, features, featuresEn, active) 
                                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
        for (const item of services) {
            stmt.run([item.id, item.icon, item.title, item.titleEn, item.tag || null, item.tagEn || null, item.desc, item.descEn, J(item.features), J(item.featuresEn), item.active ? 1 : 0]);
        }
        stmt.free();
        console.log(`Seeded ${services.length} services`);
    }

    // Seed portfolio
    const portfolio = readJson("portfolio.json");
    if (portfolio && Array.isArray(portfolio)) {
        const stmt = db.prepare(`INSERT INTO portfolio (slug, title, titleEn, category, result, resultEn, desc, descEn, tags, active) 
                                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
        for (const item of portfolio) {
            stmt.run([item.slug, item.title, item.titleEn, item.category, item.result, item.resultEn, item.desc, item.descEn, J(item.tags), item.active ? 1 : 0]);
        }
        stmt.free();
        console.log(`Seeded ${portfolio.length} portfolio items`);
    }

    // Seed blog
    const blog = readJson("blog.json");
    if (blog && Array.isArray(blog)) {
        const stmt = db.prepare(`INSERT INTO blog (slug, category, categoryEn, title, titleEn, excerpt, excerptEn, content, contentEn, date, dateEn, readTime, featured, active) 
                                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
        for (const item of blog) {
            stmt.run([item.slug, item.category, item.categoryEn, item.title, item.titleEn, item.excerpt || "", item.excerptEn || "", item.content || "", item.contentEn || "", item.date || "", item.dateEn || "", item.readTime || "5", item.featured ? 1 : 0, item.active ? 1 : 0]);
        }
        stmt.free();
        console.log(`Seeded ${blog.length} blog posts`);
    }

    // Seed training
    const training = readJson("training.json");
    if (training && Array.isArray(training)) {
        const stmt = db.prepare(`INSERT INTO training (slug, badge, badgeEn, title, desc, descEn, duration, durationEn, level, levelEn, price, priceEn, cert, certEn, highlights, highlightsEn, emoji, active) 
                                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
        for (const item of training) {
            stmt.run([item.slug, item.badge || "", item.badgeEn || "", item.title, item.desc, item.descEn, item.duration || "", item.durationEn || "", item.level || "", item.levelEn || "", item.price || "", item.priceEn || "", item.cert || "", item.certEn || "", J(item.highlights), J(item.highlightsEn), item.emoji || "🎓", item.active ? 1 : 0]);
        }
        stmt.free();
        console.log(`Seeded ${training.length} training programs`);
    }

    // Seed testimonials
    const testimonials = readJson("testimonials.json");
    if (testimonials && Array.isArray(testimonials)) {
        const stmt = db.prepare(`INSERT INTO testimonials (id, name, role, roleEn, text, textEn, avatar, rating, active) 
                                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`);
        for (const item of testimonials) {
            stmt.run([item.id, item.name, item.role || "", item.roleEn || "", item.text, item.textEn, item.avatar || "", item.rating || 5, item.active ? 1 : 0]);
        }
        stmt.free();
        console.log(`Seeded ${testimonials.length} testimonials`);
    }

    // Seed partners
    const partners = readJson("partners.json");
    if (partners && Array.isArray(partners)) {
        const stmt = db.prepare(`INSERT INTO partners (id, name, abbr, logo, active) VALUES (?, ?, ?, ?, ?)`);
        for (const item of partners) {
            stmt.run([item.id, item.name, item.abbr || "", item.logo || "", item.active ? 1 : 0]);
        }
        stmt.free();
        console.log(`Seeded ${partners.length} partners`);
    }

    // Seed team
    const team = readJson("team.json");
    if (team && Array.isArray(team)) {
        const stmt = db.prepare(`INSERT INTO team (id, name, role, roleEn, initials, desc, descEn, active) 
                                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`);
        for (const item of team) {
            stmt.run([item.id, item.name, item.role || "", item.roleEn || "", item.initials || "", item.desc || "", item.descEn || "", item.active ? 1 : 0]);
        }
        stmt.free();
        console.log(`Seeded ${team.length} team members`);
    }

    // Seed about
    const about = readJson("about.json");
    if (about) {
        db.run(`INSERT OR REPLACE INTO about (id, vision, visionEn, missions, missionsEn, "values", timeline, achievements) 
                VALUES (1, ?, ?, ?, ?, ?, ?, ?)`, [
            about.vision || "", about.visionEn || "",
            J(about.missions), J(about.missionsEn),
            J(about.values), J(about.timeline), J(about.achievements)
        ]);
        console.log("Seeded about page data");
    }

    // Save database to file
    const data = db.export();
    const buffer = Buffer.from(data);
    fs.writeFileSync(DB_PATH, buffer);
    db.close();

    console.log(`\n✅ Database seeding complete! Database at: ${DB_PATH}`);
    console.log(`   File size: ${(buffer.length / 1024).toFixed(1)} KB`);
}

main().catch(console.error);

