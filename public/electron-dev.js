const path = require('path');

const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true";

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      nodeIntegrationInWorker: true
    },
  });

  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

app.on("ready", async () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const path = require("path");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const os = require("os");
  BrowserWindow.addDevToolsExtension(
    path.join(
      os.homedir(),
      "/AppData/Local/Google/Chrome/User Data/Profile 1/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.27.2_0"
    )
  );
  BrowserWindow.addDevToolsExtension(
    path.join(
      os.homedir(),
      "/AppData/Local/Google/Chrome/User Data/Profile 1/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/3.0.17_0"
    )
  ); 
  installExtension(REDUX_DEVTOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log("An error occurred: ", err));
  createWindow();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});