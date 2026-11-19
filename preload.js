// Minimal, isolated preload. The original TALOS AI interface runs unchanged.
const { contextBridge } = require('electron');
contextBridge.exposeInMainWorld('talosDesktop', Object.freeze({
  isDesktop: true,
  appName: 'TALOS AI'
}));
