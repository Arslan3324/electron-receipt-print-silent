# Receipt Preview & Print (Electron)

A tiny Electron app that lets you **preview any receipt/URL in an isolated `<webview>`** and **print it from the main process** using the webContents ID. Great for POS-style “print this hosted receipt page” flows.

---

## ✨ Features

- Load any HTTPS URL into a sandboxed `<webview>` preview.
- One-click **Print** that routes through the **main process** (no brittle in-page window.print()).
- Choose between **print dialog** or **silent/background printing** (configurable).
- Minimal UI and codebase—easy to extend and brand.

---

## 📦 Quick Start

> Requires Node.js 18+ (or 20+ recommended) and a system printer installed.

1) **Clone** this repository and enter it:

```bash
git clone <your-repo-url>
cd <your-repo-folder>

2) Create package.json (if you don’t have one yet
{
  "name": "receipt-preview-print",
  "version": "1.0.0",
  "main": "main.js",
  "type": "module",
  "scripts": {
    "start": "electron .",
    "dev": "electron ."
  },
  "devDependencies": {
    "electron": "^32.0.0"
  }
}
3) Install deps & run:
npm install
npm run dev
```
