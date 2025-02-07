const { app, BrowserWindow, ipcMain } = require('electron');

let win;

app.whenReady().then(() => {
    win = new BrowserWindow({
        width: 400,
        height: 300,
        frame: false, // Sin marco de ventana
        transparent: true, // Permite transparencia
        resizable: false, // No redimensionable
        alwaysOnTop: true, // Siempre en primer plano
        movable: true, // Permite mover la ventana
        hasShadow: false, // Sin sombra
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: __dirname + "/preload.js" // Para cerrar la app de forma segura
        }
    });

    win.loadFile("index.html");
});

// Evento para cerrar la app desde el frontend
ipcMain.on("cerrar-app", () => {
    app.quit();
});
