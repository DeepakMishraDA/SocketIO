import { Server } from "socket.io";

export function launchSocketserver (server){

//Server is a class  object coming from socket.io module or library 

    const io = new Server();

// io.of('/trialroute').on('connection', (socket) => {
//     socket.on('conn',data => {
//       console.log("DATA:", data.notifications[0].location.district)})
//       } )
    io.attach(server)
    let users = [];
    io.on('connection', function (socket) {
        
            socket.emit('LISTEN', "My Name Is DASHANAN!")
            //here after
            socket.on('ALARMNOTIFICATION', async function (data) {
            try {
                console.log(socket)
                console.log(data)
            } catch (err) {
                console.log(err);
            }
            });
            const count = io.engine.clientsCount;
            console.log(count);
        }
        );
        
       
}

