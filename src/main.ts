import { app, BrowserWindow, Menu } from 'electron';
import * as path from 'path';

function createWindow() {
    const mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        title: 'Audio FX',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
    mainWindow.loadFile(path.join(__dirname + '/../index.html'));
    const menu = Menu.buildFromTemplate([
        {
            label: 'Files'
        },
        {
            label: 'Edit'
        }
    ]);
    mainWindow.setMenu(menu);
    mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow();
    });
    app.on('window-all-closed', () => {
        if(process.platform !== 'darwin') app.quit();
    });
});