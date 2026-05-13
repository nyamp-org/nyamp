import { ipcRenderer, contextBridge } from 'electron'

contextBridge.exposeInMainWorld('api', {
  helloWorld: () => ipcRenderer.invoke('hello-world'),
})
