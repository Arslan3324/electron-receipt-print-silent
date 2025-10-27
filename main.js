const { app, BrowserWindow, ipcMain, webContents } = require("electron");
const path = require("path");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      // allow <webview> tag for isolated preview
      webviewTag: true,
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false
    }
  });

  win.loadFile(path.join(__dirname, "index.html"));
  // win.webContents.openDevTools({ mode: "detach" }); // optional for debugging
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// Receive a webContentsId from the renderer (the <webview>) and open the print dialog
ipcMain.handle("print:webcontents", async (_e, { wcId }) => {
  if (!wcId) throw new Error("Missing webContentsId");
  const wc = webContents.fromId(wcId);
  if (!wc) throw new Error("Invalid webContentsId");

  return new Promise((resolve) => {
    wc.print(
      {
        silent: true,           // show the print dialog
        printBackground: true,
        margins: { marginType: "default" }
      },
      (didSucceed, failureReason) => {
        resolve({ ok: didSucceed, error: failureReason || null });
      }
    );
  });
});
