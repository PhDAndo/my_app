const { app, BrowserWindow } = require('electron')

function createWindow () {
    //crée la fenetre du navigateur.
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    //et charge le index.html dans l'app.
    win.loadFile('index.html') 

    //ouvre les DevTools.
    win = null
}



//cette méthode sera appelée quant Electron aura fini
//de s'initialiser et prêt à créer des fenêtres de navigation.
//Cerstaines APIs peuvent être utilisées uniquement quand cet événement est émit.
app.whenReady().then(createWindow)

//Quitter si toutes les fenêtres ont été fermées.
app.on('window-all-closed', () => {
    //Sur macOS, il est commun pour une application et leur barre de menu
    //de rester active tant que l'utilisateur ne quitte pas eplicitement avec Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    //Sur macOS, il est commun de re-créer une fenêtre de l'application quand
    //l'icône du dock est cliquée et qu'il n'y a pas d'autres fenêtre ouverte.
    if (win === null) {
        createWindow()
    }
})

//Dans ce fichier, vous pouvez inclure le reste de votre code spécifique au processus principal. Vous pouvez également le mettre dans des fichiers séparés et les inclure ici.
