const {app, BrowserWindow, ipcMain} = require('electron')
const electron = require('electron')

const Menu = electron.Menu

Menu.setApplicationMenu(null)


app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        width:830,
        height:520,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false, 
        }
    })
    mainWindow.loadFile('./src/1.html')
    
    let ipcMain = require('electron').ipcMain;
    ipcMain.on('window-min', function() {
        mainWindow.minimize();
    })
    ipcMain.on('window-max', function() {
        if (mainWindow.isMaximized()) {
            mainWindow.restore();
        } else {
            mainWindow.maximize();
        }
    })
    //接收关闭命令
    ipcMain.on('window-close', function() {
        mainWindow.close();
    })

})
