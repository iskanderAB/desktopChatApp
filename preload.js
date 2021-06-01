const { ipcRenderer ,contextBridge } = require('electron');

console.log('reloading ... ') ;

contextBridge.exposeInMainWorld('electron', {
        notificationApi : {
            sendNotification : (message) =>  {
                ipcRenderer.send('notify', message);
            }
        }
});
// window.sendNotification = (message) => {
//     ipcRenderer.send('notify' , message);
//     return 0 ;
// };
