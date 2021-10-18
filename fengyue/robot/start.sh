# https://github.com/aler9/rtsp-simple-server
# https://www.ffmpeg.org/

ffmpeg -f dshow \
-i video="Logitech HD Webcam C270" \
-preset ultrafast -tune zerolatency \
-vcodec libx264 \
-f rtsp rtsp://localhost:8554/live
