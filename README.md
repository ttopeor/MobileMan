# MobilemanUI

ffplay -i "rtsp://192.168.10.108:8554/live" -fflags nobuffer -flags low_delay -framedrop
======================================================================================
1.寻找可用摄像头
ffmpeg -list_devices true -f dshow -i dummy

2.git push
=======================================================================================

Server
cd MobilemanUI && ./rtsp-simple-server

Rotbot
ffmpeg -f v4l2 -video_size 640x480 -framerate 25 -i /dev/video0 -vcodec libx264 -tune zerolatency -preset ultrafast -f rtsp rtsp://192.168.10.40:8554/live 

ROS
export ROS_MASTER_URI=http://mobileman-Atom:11311 (if needed)
roslaunch rosbridge_server rosbridge_websocket.launch

UI
cd MobilemanUI/electron-quick-start && npm start 





