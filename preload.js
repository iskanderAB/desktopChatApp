const { ipcRenderer } = require('electron');


console.log('reloading ... ') ;
window.sendNotification = (message) => {
    ipcRenderer.send('notify' , message);
};
