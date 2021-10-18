import express from "express";
import http from "http";
//@ts-ignore
import Stream from "node-rtsp-stream";

const app = express();
const server = http.createServer(app);

/**
 * Socket io
 */
const rtspServer = new Stream({
  name: "camera",
  streamUrl: "rtsp://192.168.10.100:8554/live",
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
app.use(express.static("public"));

app.post("/connection", (req, res) => {
  res.json({ id: 1, state: "good" });
});

/**
 * Listen
 */
server.listen(3000, () => {
  console.log("Server start running...");
});
