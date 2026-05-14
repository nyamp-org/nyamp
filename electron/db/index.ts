import Database from "better-sqlite3";
import { app } from "electron";
import path from "path";
import { drizzle } from "drizzle-orm/better-sqlite3"
import * as schema from "./schema/index"

const dbPath = path.join(app.getPath('userData'), 'nyamp.db')
const sqlite = new Database(dbPath)
sqlite.pragma('journal_mode = WAL')

export const db = drizzle(sqlite, { schema })
