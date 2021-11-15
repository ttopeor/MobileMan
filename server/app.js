
//==============================message receive=======================================
// Then we add a callback to be called every time a message is published on this topic.
 /*
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
*/

player = new JSMpeg.Player("ws://54.254.23.229:9999", {
  canvas: document.getElementById("get_video") // Canvas should be a canvas DOM element
});



homepage();


function homepage(){
  setbodysize();

  hide_item_by_ID('video');
  hide_item_by_ID('info_container');
  hide_item_by_ID('navgation_container');
 

  show_item_by_ID('tool_img');
  show_item_by_ID('Manual_button');
  show_item_by_ID('Auto_button');
  
}

function Manualpage(){

  document.getElementById('Manual_button').innerHTML = "";
  document.getElementById('Manual_button').disabled = true;
  jQuery("#Manual_button").detach().appendTo('#background');

  document.getElementById('Auto_button').innerHTML = "Auto";
  document.getElementById('Auto_button').disabled = false;
  jQuery("#Auto_button").detach().appendTo('#body');
  

  hide_item_by_ID('tool_img');
  hide_item_by_ID('navgation_container');
  hide_item_by_ID('info_container');


  max_page('Manual_button');
  min_button('Auto_button');

  
  
    
}

function Autopage(){

  document.getElementById('Auto_button').innerHTML = "";
  document.getElementById('Auto_button').disabled = true;
  jQuery("#Auto_button").detach().appendTo('#background');

  
  document.getElementById('Manual_button').innerHTML = "Manual";
  document.getElementById('Manual_button').disabled = false;
  jQuery("#Manual_button").detach().appendTo('#body');
  

  hide_item_by_ID('tool_img');
  hide_item_by_ID('video');
  hide_item_by_ID('info_container');

  max_page('Auto_button');
  min_button('Manual_button');


  
}

function hide_item_by_ID(ID){

  var x = document.getElementById(ID);
      x.style.visibility = "hidden";
  jQuery("#"+ID).detach().appendTo('#hiden_element');
}

function show_item_by_ID(ID){
  jQuery("#"+ID).detach().appendTo('#body');
  var x = document.getElementById(ID);
      x.style.visibility = "visible";
}
    
async function min_button(button_ID){

    button=document.getElementById(button_ID);

    width=button.style.paddingRight;
    width_Float=parseFloat(width);

    height=button.style.paddingTop;
    height_Float=parseFloat(height);

    border_radius = button.style.borderRadius;
    border_radius_Float=parseFloat(border_radius);

    font_size = button.style.fontSize;
    font_size_Float = parseFloat(font_size);
    
    margin_top = button.style.marginTop;
    margin_top_Float=parseFloat(margin_top);

    margin_right = button.style.marginRight;
    margin_right_Float=parseFloat(margin_right);

    margin_left = button.style.marginLeft;
    margin_left_Float=parseFloat(margin_left);

    for (let i = 0; i < 100; i++) 
    {
 
     if(parseInt(document.querySelector('#'+ button_ID).offsetWidth) > 250){
        width_Float = width_Float - 1;
        button.style.paddingRight = (width_Float).toString()+'%';
        button.style.paddingLeft = button.style.paddingRight;
      }
      if(parseInt(document.querySelector('#'+ button_ID).offsetHeight) > 150){
        height_Float = height_Float - 0.5;
        button.style.paddingTop = (height_Float).toString()+'%';
        button.style.paddingBottom = button.style.paddingTop;
      }
      if(border_radius_Float > 20){
        border_radius_Float = border_radius_Float - 1;
        button.style.borderRadius = (border_radius_Float).toString()+"px";
      }
      if(font_size_Float > 40){
        font_size_Float = font_size_Float - 1;
        button.style.fontSize = (font_size_Float).toString()+"px";
      }

      if(margin_top_Float<4){
        margin_top_Float = margin_top_Float + 0.5;
        button.style.marginTop = (margin_top_Float).toString()+'%';
      }
      if(margin_top_Float>4){
        margin_top_Float = margin_top_Float - 0.5;
        button.style.marginTop = (margin_top_Float).toString()+'%';
      }

      if (button_ID == "Manual_button"){
        if(margin_left_Float<6){
          margin_left_Float = margin_left_Float + 0.5;
          button.style.marginLeft = (margin_left_Float).toString()+'%';
        }
        if(margin_left_Float>6){
          margin_left_Float = margin_left_Float - 0.5;
          button.style.marginLeft = (margin_left_Float).toString()+'%';
        }
      }else{
        if(margin_right_Float<6){
          margin_right_Float = margin_right_Float + 0.5;
          button.style.marginRight = (margin_right_Float).toString()+'%';
        }
        if(margin_right_Float>6){
          margin_right_Float = margin_right_Float - 0.5;
          button.style.marginRight = (margin_right_Float).toString()+'%';
        }
      }


      await sleep(5);
    }

 
    show_item_by_ID('info_container');
    info = document.getElementById('info_container');
    info.style.width = "25%";
    info.style.height = document.getElementById("body").style.height;

    if(button_ID == "Auto_button"){
      document.getElementById('Manual_button').style.position="absolute";

      info.style.cssFloat = "right";
      info.style.right = "0px";
      info.style.left = "auto";
    }else{
     
      info.style.cssFloat = "left";
      info.style.left = "0px";
      info.style.right = "auto";
    }

    jQuery("#info_container").detach().appendTo('#background');


}
async function max_page(page_ID){
    
    page=document.getElementById(page_ID);

    page_width=page.style.paddingRight;
    page_width_Float=parseFloat(page_width);

    page_height=page.style.paddingTop;
    page_height_Float=parseFloat(page_height);

    page_border_radius = page.style.borderRadius;
    page_border_radius_Float=parseFloat(page_border_radius);
    
    page_margin_left = page.style.marginLeft;
    page_margin_left_Float=parseFloat(page_margin_left);

    page_margin_top = page.style.marginTop;
    page_margin_top_Float=parseFloat(page_margin_top);

    page_margin_right = page.style.marginRight;
    page_margin_right_Float=parseFloat(page_margin_right);

    for (let i = 0; i < 100; i++) {
  
      if(parseInt(document.querySelector('#'+ page_ID).offsetWidth) < parseInt(document.getElementById("body").style.width)){
        page_width_Float = page_width_Float + 1;
        page.style.paddingRight = (page_width_Float).toString()+'%';
        page.style.paddingLeft = page.style.paddingRight;
      }
      if(parseInt(document.querySelector('#'+ page_ID).offsetHeight) < parseInt(document.getElementById("body").style.height)){
        page_height_Float = page_height_Float + 0.5;
        page.style.paddingTop = (page_height_Float).toString()+'%';
        page.style.paddingBottom = page.style.paddingTop;
      }

      if(page_border_radius_Float<75){
        page_border_radius_Float = page_border_radius_Float + 1;
        page.style.borderRadius = (page_border_radius_Float).toString()+"px";
      }

      if(page_margin_top_Float>0){
        page_margin_top_Float = page_margin_top_Float - 0.5;
        page.style.marginTop = (page_margin_top_Float).toString()+'%';
      }

     if (page_ID == "Manual_button"){
        if(page_margin_left_Float>0){
          page_margin_left_Float = page_margin_left_Float - 0.5;
          page.style.marginLeft = (page_margin_left_Float).toString()+'%';
        }
      }else{
        if(page_margin_right_Float>0){
          page_margin_right_Float = page_margin_right_Float - 0.5;
          page.style.marginRight = (page_margin_right_Float).toString()+'%';
        }
      }


      await sleep(5);
    }

    if (page_ID == "Manual_button"){
      show_item_by_ID('video');
      video = document.getElementById('video');
      video.style.width = "70%"
      video_width = parseInt(document.querySelector('#video').offsetWidth);
      video_height = video_width/(16/9);
      video.style.height = video_height;
      video.style.marginTop = ((parseInt(document.querySelector('#'+ page_ID).offsetHeight) - video_height)/2).toString()+"px";
    }else{
      show_item_by_ID('navgation_container');
      navgation_container = document.getElementById('navgation_container');
      navgation_container.style.width = "70%"
      navgation_container_width = parseInt(document.querySelector('#navgation_container').offsetWidth);
      navgation_container_height = navgation_container_width/(16/9);
      navgation_container.style.height = navgation_container_height;
      navgation_container.style.marginTop = ((parseInt(document.querySelector('#'+ page_ID).offsetHeight) - navgation_container_height)/2).toString()+"px";
    }
    show_item_by_ID('info_container');
}
function statusMessageCallback(message) {

  var text='x:' + String(message.orientation.x.toFixed(5)) 
         + '   y:' + String(message.orientation.y.toFixed(5)) 
         + '   z:' + String(message.orientation.z.toFixed(5))
         + '   w:' + String(message.orientation.w.toFixed(5));

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

function setbodysize(){
  document.getElementById("body").style.width=window.innerWidth;
  document.getElementById("body").style.height=window.innerHeight;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



