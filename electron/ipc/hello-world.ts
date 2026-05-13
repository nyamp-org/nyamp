import { ipcMain } from 'electron'

export function registerHelloWorldHandlers() {
  ipcMain.handle('hello-world', () => {
    return 'hello world!'
  })
}
