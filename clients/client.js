import { io } from "socket.io-client";

const socket = io.connect('http://localhost:3000');
socket.emit('Join!', "Joey");
socket.on("New User",(data) => {
  console.log(data);
})







// import {Polygon, NotificationsUpdates, Organizer } from './classtrial.js';

// const polygonInst = new Organizer();
// try{
//   await polygonInst.foo();
//   console.log(polygonInst.data);
//   }catch (error) {
//     console.log(error);
//   }
// //console.log(polygonInst.schema);

// const notificationInst = new NotificationsUpdates();
// try {
//   await notificationInst.init(123456);
//   console.log(notificationInst.allFlags)
//   } catch(error) {
//     console.log(error)
//   }

// const chckingConditional = await notificationInst.checkAFlag(true);
// console.log(notificationInst.bool);

// const person = {
//   notifications: [
//     {
//       uri: '/notification/relevantflag',
//       alarm_id: 1,
//       location: {
//         building: 'Mendelstrasse 3',
//         city: 'Berlin',
//         district: 'Pankow',
//       },
//       device: 'Abluftwärmepumpe',
//       severity: 2,
//       manually_fixed: false,
//       resolved: false,
//       message: 'Es wurde keine Betriebsmeldung registriert.',
//       building_id: 9494950,
//       node_id: 3040595234,
//       unix_timestamp: 1637721004000,
//       unread: false,
//       relevant: false,
//       save_for_later: false,
//       number_of_comments: 0,
//       archive: false,
//       isChecked: false,
//     },
//     {
//       uri: '/notification/readflag',
//       alarm_id: 2,
//       location: {
//         building: 'Seeweg 123',
//         city: 'Berlin',
//         district: 'Mitte',
//       },
//       device: 'Kessel',
//       severity: 3,
//       manually_fixed: false,
//       resolved: false,
//       message:
//         'Abluftwärmepumpe, Abluftwärmepumpe WP1 | Der manuelle Betrieb der Wärmepumpe (Freigabe) wurde aktiviert.',
//       building_id: 124235,
//       node_id: 2340982430,
//       unix_timestamp: 1638174758192,
//       unread: false,
//       relevant: false,
//       save_for_later: false,
//       number_of_comments: 0,
//       archive: false,
//       isChecked: false,
//     }
//   ],
// };

// function funOne() {
//     function funTwo(){
//         console.log("Deepak Two")
//     }
//     funOne = funTwo;
//     console.log("Deepak One")
// };

// funOne();
// funOne();

// (
//     function deepak(){
//         console.log("Deepak");
//     }
// );
// import { WebSocketServer } from "ws";

// const server = new WebSocketServer({ port: 3000 });

// server.on("connection", (socket) => {
//   // send a message to the client
//   socket.send(JSON.stringify({
//     type: "hello from server",
//     content: [ 1, "2" ]
//   }));

//   // receive a message from the client
//   socket.on("message", (data) => {
//     const packet = JSON.parse(data);

//     switch (packet.type) {
//       case "hello from client":
//         // ...
//         break;
//     }
//   });
// });

// class Person {
//     createPerson(firstname,surname,age, profession){
//         this.name = firstname;
//         this.surname = surname;
//         this.age = age;
//         this.profession = profession;
//     }

// };
// var personOne = new Person();
// console.log(personOne.age);
// personOne.createPerson('Deepak','Mishra',31,'Entwickler')
// console.log(personOne.age);

// const objOne = {
//     "deepak":11,
// };
// console.log(objOne.__proto__.__proto__);
// console.log(objOne.toString().__proto__.__proto__.__proto__);
// console.log(Object.getPrototypeOf(objOne).__proto__);


