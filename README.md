# MobilemanUI

ffplay -i "rtsp://192.168.10.108:8554/live" -fflags nobuffer -flags low_delay -framedrop
======================================================================================
寻找可用摄像头
ffmpeg -list_devices true -f dshow -i dummy


=======================================================================================

Server
cd MobilemanUI && ./rtsp-simple-server

Rotbot
ffmpeg -f v4l2 -video_size 640x480 -framerate 25 -i /dev/video0 -vcodec libx264 -tune zerolatency -preset ultrafast -f rtsp rtsp://192.168.10.40:8554/live 

ROS(if needed)
export ROS_MASTER_URI=http://mobileman-Atom:11311
roslaunch rosbridge_server rosbridge_websocket.launch

UI
cd MobilemanUI/electron-quick-start && npm start 

==============================for test===================================
Server
cd Desktop/MobilemanUI && ./rtsp-simple-server-mac

Rotbot
ffmpeg -f avfoundation -framerate 25 -video_size 640x480 -i "0:none" -vcodec libx264 -preset ultrafast -tune zerolatency -pix_fmt uyvy422 -f rtsp rtsp://localhost:8554/live 

ROS(if needed)
export ROS_MASTER_URI=http://mobileman-Atom:11311
roslaunch rosbridge_server rosbridge_websocket.launch

UI
cd MobilemanUI/ui && npm start 


