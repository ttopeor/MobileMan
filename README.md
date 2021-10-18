# MobilemanUI

Depandencies: https://zhuanlan.zhihu.com/p/28009037

sudo /usr/local/nginx/nginx
sudo /usr/local/nginx/nginx -s reload
sudo /usr/local/nginx/nginx -s stop


ffmpeg -f v4l2 -video_size 640x480 -framerate 30 -i /dev/video0 -vcodec libx264 -tune zerolatency -preset veryfast -f flv rtmp://localhost:1935/live/mystream

ffplay -i "rtmp://localhost:1935/live/mystream" -fflags nobuffer -flags low_delay -framedrop
======================================================================================
1.寻找可用摄像头
ffmpeg -list_devices true -f dshow -i dummy
此时列出了可用摄像头名称

2.测试摄像头
ffplay -f dshow -i video="摄像头名称" 此处的摄像头名称是由上条命令执行后查询得到的
例如：ffmpeg -f dshow -i video="USB Camera"

3.摄像头推流
ffmpeg -f dshow -i video="摄像头名称" -vcodec libx264 -preset:v ultrafast -tune:v zerolatency -f flv 推流地址

实测低延迟低丢帧摄像头推流
ffmpeg -f dshow -i video="摄像头名称" -framerate 25 -bufsize 1000000k -vcodec libx264 -preset:v ultrafast -tune:v zerolatency -acodec libfaac -f flv 推流地址

ffmpeg -r 30  -i /dev/video0 -vcodec h264 -max_delay 100 -tune zerolatency -preset fast -f flv -g 5 -b 700000 rtmp://localhost:1935/live/mystream

=======================================================================================


https://blog.csdn.net/TH_NUM/article/details/103202038

./configure --sbin-path=/usr/local/nginx/nginx \
--conf-path=/usr/local/nginx/nginx.conf \
--pid-path=/usr/local/nginx/nginx.pid \
--with-http_ssl_module \
--with-pcre=/home/yue/MobilemanUI/pcre-8.43 \
--add-module=/home/yue/MobilemanUI/nginx-http-flv-module \
--with-openssl=/home/yue/MobilemanUI/openssl-1.0.1t 
================================================================
weige banben

Server
cd MobilemanUI && ./rtsp-simple-server

Rotbot
cd MobilemanUI/fengyue && ffmpeg -i /dev/video0 -vcodec libx264 -tune zerolatency -preset veryfast -f rtsp rtsp://localhost:8554/live 

UI
cd MobilemanUI/fengyue/Server/src && ts-node index.ts





