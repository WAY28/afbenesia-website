  // ============================================================
// Database utility — SQLite via sql.js (pure JS, no native deps)
// ============================================================

import initSqlJs from "sql.js";
import fs from "fs";
import path from "path";

const DB_PATH = path.join(process.cwd(), "data", "afbenesia.db");

let db = null;
let SQL = null;

// Initialize SQL.js (load WASM)
async function initSQL() {
    if (!SQL) {
        SQL = await initSqlJs();
    }
    return SQL;
}

export async function getDb() {
    if (!db) {
        const Sql = await initSQL();
        // Try to load existing database file
        try {
            if (fs.existsSync(DB_PATH)) {
                const buffer = fs.readFileSync(DB_PATH);
                db = new Sql.Database(buffer);
            } else {
                db = new Sql.Database();
            }
        } catch {
            db = new Sql.Database();
        }
        initTables();
        saveDb();
    }
    return db;
}

function saveDb() {
    if (db) {
        const data = db.export();
        const buffer = Buffer.from(data);
        fs.writeFileSync(DB_PATH, buffer);
    }
}

// Ensure integer values
function toInt(val) {
    if (val === null || val === undefined) return 0;
    if (typeof val === "boolean") return val ? 1 : 0;
    const n = parseInt(val, 10);
    return isNaN(n) ? 0 : n;
}

function initTables() {
    db.run(`
        CREATE TABLE IF NOT EXISTS services (
            id TEXT PRIMARY KEY,
            icon TEXT NOT NULL DEFAULT '🤖',
            title TEXT NOT NULL,
            titleEn TEXT NOT NULL,
            tag TEXT,
            tagEn TEXT,
            desc TEXT NOT NULL,
            descEn TEXT NOT NULL,
            features TEXT NOT NULL DEFAULT '[]',
            featuresEn TEXT NOT NULL DEFAULT '[]',
            active INTEGER NOT NULL DEFAULT 1,
            createdAt TEXT NOT NULL DEFAULT (datetime('now'))
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS portfolio (
            slug TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            titleEn TEXT NOT NULL,
            category TEXT NOT NULL,
            result TEXT NOT NULL,
            resultEn TEXT NOT NULL,
            desc TEXT NOT NULL,
            descEn TEXT NOT NULL,
            tags TEXT NOT NULL DEFAULT '[]',
            active INTEGER NOT NULL DEFAULT 1,
            createdAt TEXT NOT NULL DEFAULT (datetime('now'))
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS blog (
            slug TEXT PRIMARY KEY,
            category TEXT NOT NULL,
            categoryEn TEXT NOT NULL,
            title TEXT NOT NULL,
            titleEn TEXT NOT NULL,
            excerpt TEXT NOT NULL DEFAULT '',
            excerptEn TEXT NOT NULL DEFAULT '',
            content TEXT NOT NULL DEFAULT '',
            contentEn TEXT NOT NULL DEFAULT '',
            date TEXT NOT NULL DEFAULT '',
            dateEn TEXT NOT NULL DEFAULT '',
            readTime TEXT NOT NULL DEFAULT '5',
            featured INTEGER NOT NULL DEFAULT 0,
            active INTEGER NOT NULL DEFAULT 1,
            createdAt TEXT NOT NULL DEFAULT (datetime('now'))
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS training (
            slug TEXT PRIMARY KEY,
            badge TEXT NOT NULL DEFAULT '',
            badgeEn TEXT NOT NULL DEFAULT '',
            title TEXT NOT NULL,
            desc TEXT NOT NULL,
            descEn TEXT NOT NULL,
            duration TEXT NOT NULL DEFAULT '',
            durationEn TEXT NOT NULL DEFAULT '',
            level TEXT NOT NULL DEFAULT '',
            levelEn TEXT NOT NULL DEFAULT '',
            price TEXT NOT NULL DEFAULT '',
            priceEn TEXT NOT NULL DEFAULT '',
            cert TEXT NOT NULL DEFAULT '',
            certEn TEXT NOT NULL DEFAULT '',
            highlights TEXT NOT NULL DEFAULT '[]',
            highlightsEn TEXT NOT NULL DEFAULT '[]',
            emoji TEXT NOT NULL DEFAULT '🎓',
            active INTEGER NOT NULL DEFAULT 1,
            createdAt TEXT NOT NULL DEFAULT (datetime('now'))
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS testimonials (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            role TEXT NOT NULL DEFAULT '',
            roleEn TEXT NOT NULL DEFAULT '',
            text TEXT NOT NULL,
            textEn TEXT NOT NULL,
            avatar TEXT NOT NULL DEFAULT '',
            rating INTEGER NOT NULL DEFAULT 5,
            active INTEGER NOT NULL DEFAULT 1,
            createdAt TEXT NOT NULL DEFAULT (datetime('now'))
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS partners (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            abbr TEXT NOT NULL DEFAULT '',
            logo TEXT NOT NULL DEFAULT '',
            active INTEGER NOT NULL DEFAULT 1,
            createdAt TEXT NOT NULL DEFAULT (datetime('now'))
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS team (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            role TEXT NOT NULL DEFAULT '',
            roleEn TEXT NOT NULL DEFAULT '',
            initials TEXT NOT NULL DEFAULT '',
            desc TEXT NOT NULL DEFAULT '',
            descEn TEXT NOT NULL DEFAULT '',
            active INTEGER NOT NULL DEFAULT 1,
            createdAt TEXT NOT NULL DEFAULT (datetime('now'))
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS about (
            id INTEGER PRIMARY KEY,
            vision TEXT NOT NULL DEFAULT '',
            visionEn TEXT NOT NULL DEFAULT '',
            missions TEXT NOT NULL DEFAULT '[]',
            missionsEn TEXT NOT NULL DEFAULT '[]',
            "values" TEXT NOT NULL DEFAULT '[]',
            timeline TEXT NOT NULL DEFAULT '[]',
            achievements TEXT NOT NULL DEFAULT '[]',
            updatedAt TEXT NOT NULL DEFAULT (datetime('now'))
        )
    `);
}

// Helper to convert sql.js result rows to array of objects
function rowsToObjects(stmt) {
    const results = [];
    while (stmt.step()) {
        const row = stmt.getAsObject();
        results.push(row);
    }
    stmt.free();
    return results;
}

// ── CRUD Helpers ──

export async function getAll(table) {
    const d = await getDb();
    const stmt = d.prepare(`SELECT * FROM ${table} ORDER BY createdAt DESC`);
    const rows = rowsToObjects(stmt);
    // Parse JSON fields
    return rows.map(row => parseRow(row));
}

export async function getById(table, idField, id) {
    const d = await getDb();
    const stmt = d.prepare(`SELECT * FROM ${table} WHERE ${idField} = ?`);
    stmt.bind([id]);
    const rows = rowsToObjects(stmt);
    if (rows.length === 0) return null;
    return parseRow(rows[0]);
}

export async function createItem(table, data) {
    const d = await getDb();
    const columns = Object.keys(data).join(", ");
    const placeholders = Object.keys(data).map(() => "?").join(", ");
    const values = Object.values(data);
    d.run(`INSERT INTO ${table} (${columns}) VALUES (${placeholders})`, values);
    saveDb();
    return data;
}

export async function updateItem(table, data, idField, id) {
    const d = await getDb();
    const setClause = Object.keys(data).map((key) => `"${key}" = ?`).join(", ");
    const values = [...Object.values(data), id];
    d.run(`UPDATE ${table} SET ${setClause} WHERE ${idField} = ?`, values);
    saveDb();
    return { ...data, [idField]: id };
}

export async function deleteItem(table, idField, id) {
    const d = await getDb();
    d.run(`DELETE FROM ${table} WHERE ${idField} = ?`, [id]);
    saveDb();
    return true;
}

export async function getAbout() {
    const d = await getDb();
    const stmt = d.prepare("SELECT * FROM about WHERE id = 1");
    const rows = rowsToObjects(stmt);
    if (rows.length === 0) {
        d.run(`INSERT INTO about (id, vision, visionEn, missions, missionsEn, "values", timeline, achievements) 
               VALUES (1, '', '', '[]', '[]', '[]', '[]', '[]')`);
        saveDb();
        return { id: 1, vision: "", visionEn: "", missions: "[]", missionsEn: "[]", values: "[]", timeline: "[]", achievements: "[]" };
    }
    return parseRow(rows[0]);
}

export async function updateAbout(data) {
    const d = await getDb();
    const setClause = Object.keys(data).map((key) => `"${key}" = ?`).join(", ");
    const values = [...Object.values(data)];
    d.run(`UPDATE about SET ${setClause}, updatedAt = datetime('now') WHERE id = 1`, values);
    saveDb();
    return data;
}

// Parse JSON string columns back to arrays/objects
function parseRow(row) {
    if (!row) return row;
    const jsonColumns = [
        "features", "featuresEn", "tags",
        "highlights", "highlightsEn",
        "missions", "missionsEn", "values", "timeline", "achievements",
    ];
    const parsed = { ...row };
    for (const col of jsonColumns) {
        if (typeof parsed[col] === "string") {
            try {
                parsed[col] = JSON.parse(parsed[col]);
            } catch {
                // keep as string
            }
        }
    }
    // Convert integer boolean fields
    if ("active" in parsed) parsed.active = !!parsed.active;
    if ("featured" in parsed) parsed.featured = !!parsed.featured;
    if ("rating" in parsed) parsed.rating = parseInt(parsed.rating, 10) || 5;
    return parsed;
}

