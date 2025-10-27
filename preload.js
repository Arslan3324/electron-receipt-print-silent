const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  printByWebContentsId: (wcId) => ipcRenderer.invoke("print:webcontents", { wcId })
});
