
//==============================message receive=======================================
// Then we add a callback to be called every time a message is published on this topic.
 var test_length = 50;
 var ros = new ROSLIB.Ros({
     url : 'ws://192.168.10.124:9090'

   });

var status_listener = new ROSLIB.Topic({
  ros : ros,
  name : '/imu/data',
  messageType : 'sensor_msgs/Imu'
});

status_listener.subscribe(statusMessageCallback);

player = new JSMpeg.Player("ws://localhost:9999", {
  canvas: document.getElementById("video") // Canvas should be a canvas DOM element
});


function statusMessageCallback(message) {

  var text='x:' + String(message.orientation.x.toFixed(5)) 
         + '   y:' + String(message.orientation.y.toFixed(5)) 
         + '   z:' + String(message.orientation.z.toFixed(5))
         + '   w:' + String(message.orientation.w.toFixed(5));


  //console.log('Received message on ' + status_listener.name + ': ' + text);
  if_msg_long(">"+text);
};



function if_msg_long(msg){
  if (msg.length<test_length){
    getmsg(msg)
  }else{
    var last_index = msg.substring(0,test_length-1).lastIndexOf(" ")
    getmsg(msg.substring(0,last_index));
    if_msg_long(msg.substring(last_index,msg.length));
  }
}

function getmsg(msg){
  document.getElementById("msg1").innerHTML = document.getElementById("msg2").innerHTML; 
  document.getElementById("msg2").innerHTML = document.getElementById("msg3").innerHTML; 
  document.getElementById("msg3").innerHTML = document.getElementById("msg4").innerHTML; 
  document.getElementById("msg4").innerHTML = document.getElementById("msg5").innerHTML; 
  document.getElementById("msg5").innerHTML =  msg; 
};




