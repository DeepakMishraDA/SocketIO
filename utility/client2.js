import { io } from "socket.io-client";

const socket = io.connect('http://localhost:3000');
const person = {Deepak: "dee"}
socket.emit('HELLO', person);
socket.emit('ALARMNOTIFICATION',person);
socket.on('LISTEN', (data) => {
  console.log(data)
})