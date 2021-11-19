//=======================stream converter=================
/**
 * Socket io
 */

const path = require('path')
//import express from "express";
//import http from "http";
//@ts-ignore
//import Stream from "node-rtsp-stream";
const express = require('express');
const http = require('http');
const Stream = require('node-rtsp-stream')

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 8080;


function start_server() {
  console.log("start rtsp server");
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



  let lastTick = Date.now()
  let receivedFirstData = false
  rtspServer.on('camdata', function (data) {
    receivedFirstData = true
    lastTick = Date.now()
  });

  const heartBeat = setInterval(() => {
    if (Date.now() - lastTick > 5000 && receivedFirstData) {
      restart()
    }
  }, 2000);


  const restart = () => {
    console.log("Restarting server...");
    rtspServer.stop();
    clearInterval(heartBeat);
    start_server();
  }

  rtspServer.on('exitWithError', () => {
    setTimeout(() => {
      restart();
    }, 3000)
  })


}
start_server();


/**
 * HTTP service
 */
app.use(express.static("/home/ubuntu/MobilemanUI/server/ui"));

// sendFile will go here
console.log('Server started at http://54.254.23.229:' + port);
/**
 * Listen
 */
server.listen(port, () => {
  console.log("Server start running...");
});