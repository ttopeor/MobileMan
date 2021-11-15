// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
//import express from "express";
//import http from "http";
//@ts-ignore
//import Stream from "node-rtsp-stream";
const express = require('express');
const http = require('http');
const Stream = require('node-rtsp-stream')

const app_stream_converter = express();
const server = http.createServer(app_stream_converter);


function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1792,
    height: 768,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
const rtspServer = new Stream({
  name: "camera",
  //streamUrl: "rtsp://192.168.10.40:8554/live",
  streamUrl: "rtsp://54.254.23.229:8554/live",
  wsPort: 9999,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30 // options with required values specify the value after the key
  }
});
/**
 * HTTP service
 */
app_stream_converter.use(express.static("public"));

app_stream_converter.post("/connection", (req, res) => {
  res.json({ id: 1, state: "good" });
});

/**
 * Listen
 */
server.listen(3000, () => {
  console.log("Server start running...");
});

