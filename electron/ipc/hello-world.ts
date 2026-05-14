import { ipcMain } from 'electron'
import { sql } from 'drizzle-orm'
import { db } from '../db'

export function registerHelloWorldHandlers() {
  ipcMain.handle('hello-world', async () => {
    return await db.get(sql`SELECT 1 as val`)
  })
}
