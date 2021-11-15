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

const app_stream_converter = express();
const server = http.createServer(app_stream_converter);
const app = express();
const port = process.env.PORT || 8080;

const rtspServer = new Stream({
  name: "camera",
  //streamUrl: "rtsp://192.168.10.40:8554/live",
  streamUrl: "rtsp://localhost:8554/live",
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


// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
  res.sendFile(path.join(__dirname, '/app.js'));
  res.sendFile(path.join(__dirname, '/app.css'));
  res.sendFile(path.join(__dirname, '/js/jquery-3.5.1.min.js'));
  res.sendFile(path.join(__dirname, '/js/roslib.js'));
});

app.listen(port);
console.log('Server started at http://54.254.23.229:' + port);
/**
 * Listen
 */
server.listen(3000, () => {
  console.log("Server start running...");
});