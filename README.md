# MobileMan, Robotics for Construction 4.0 Project WP3, Nanyang Technological University, RRC 
# Sponsored by BCA, NRP. 
#### Test video: https://www.youtube.com/watch?v=0yqf5MxZ3oI

# MobilemanUI
# Network set up
![alt text](https://github.com/ttopeor/MobileMan/blob/main/Network_Setting.png)

# 4G Test data
![alt text](https://github.com/ttopeor/MobileMan/blob/main/UI_Auto.png)

# some useful commands
~~~bash
ffplay -i "rtsp://192.168.10.108:8554/live" -fflags nobuffer -flags low_delay -framedrop
~~~

## Find cameras
~~~bash
ffmpeg -list_devices true -f dshow -i dummy
~~~

## Server start
~~~bash
Server
cd MobilemanUI && ./rtsp-simple-server
~~~
## Rotbot live streaming push
~~~bash
ffmpeg -f v4l2 -video_size 640x480 -framerate 25 -i /dev/video0 -vcodec libx264 -tune zerolatency -preset ultrafast -f rtsp rtsp://192.168.10.40:8554/live 
~~~

## ROS(if needed)
~~~bash
export ROS_MASTER_URI=http://mobileman-Atom:11311
roslaunch rosbridge_server rosbridge_websocket.launch
~~~

## UI
~~~bash
cd MobilemanUI/electron-quick-start && npm start 
~~~

# For Test
## Server
~~~bash
cd Desktop/MobilemanUI && ./rtsp-simple-server-mac
~~~

## Rotbot
~~~bash
ffmpeg -f avfoundation -framerate 25 -video_size 640x480 -i "0:none" -vcodec libx264 -preset ultrafast -tune zerolatency -pix_fmt uyvy422 -f rtsp rtsp://54.254.23.229:8554/live
~~~

## ROS(if needed)
~~~bash
export ROS_MASTER_URI=http://mobileman-Atom:11311
roslaunch rosbridge_server rosbridge_websocket.launch
~~~
UI
~~~bash
cd MobilemanUI/ui && npm start 
~~~

## Amazon EC2
~~~bash
sudo ssh -i /Users/yuefeng/"yourkey".pem "yourInstanceName".compute.amazonaws.com
~~~
~~~bash
nohup ./rtsp-simple-server  
~~~

# UI Design
### Main page
![alt text](https://github.com/ttopeor/MobileMan/blob/main/UI_main.png)
### Manual mode page
![alt text](https://github.com/ttopeor/MobileMan/blob/main/UI_manual.png)
### Auto mode page
![alt text](https://github.com/ttopeor/MobileMan/blob/main/UI_Auto.png)
