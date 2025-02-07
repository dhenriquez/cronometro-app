const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld("electronAPI", {
    closeApp: () => ipcRenderer.send("cerrar-app")
});
