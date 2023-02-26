const {app, BrowserWindow} = require('electron'); 

/*Creazione della finestra*/ 
let win;
function createWindows(){
    win = new BrowserWindow({
        width: 800,
        height: 600, 
        backgroundColor: "#ffe609",
    }); 
    /*Carichiamo la nostra windows*/ 
    win.loadURL(`file://${__dirname}/dist/index.html`); 
    // win.loadURL('file://' + __dirname + '/dist/index.html'); 
    
}

/*Quando tutto sarà pronto lanceremo l'app, creando la nostra window con createWindws*/ 
app.on('ready', createWindows);