// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain, Notification} = require('electron');
const path = require('path');
const isDev = !app.isPackaged ;
require('dotenv').config();

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor : 'white',
    webPreferences: {
      nodeIntegration : false,
      contextIsolation: true,
      worldSafeExecuteJavaScript : true,
      preload :path.join(__dirname , 'preload.js')
    }
  });
  console.log("------------------------------------------");
  console.log("-------------------------------------------");
  // and load the index.html of the app.
  mainWindow.loadURL('http://localhost:3000').then(r => console.log("ready !!!  "));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}


// ghodwa el sbah na3mlo 9ahwa

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  console.log("hello worlssss");
  createWindow();
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
});
ipcMain.on('notify',(_, message)=> {
  new Notification({title: 'Notification' , body: message}).show();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});

if (isDev) {
  require('electron-reload')(__dirname,{
    electron: path.join(__dirname,'node_modules','.bin','electron')
  })
}
