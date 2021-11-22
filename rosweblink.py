import socketio
#import rospy
#from sensor.msgs import Imu

sio = socketio.Client()



@sio.event
def connect():
    print("I'm connected!")
    #location_info_ros_listener()
    sio.emit('location_info', {'orientation': 'hihihih'})

@sio.event
def connect_error(data):
    print("The connection failed!")

@sio.event
def disconnect():
    print("I'm disconnected!")

@sio.on('command_update')
def on_command_update(data):
    print(data)
     
#def callback(message):
#   orientation = message.orientation.w
#   rospy.loginfo("I heard %s",message.orientation.w)
#   sio.emit('location_info', {'orientation': message.orientation.w})

#def location_info_ros_listener():
#	rospy.init_node('rosweblink')
#	rospy.Subscriber("/imu/data", Imu, callback)
	# spin() simply keeps python from exiting until this node is stopped
#	rospy.spin()


sio.connect('http://localhost:8080')