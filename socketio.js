import { Server } from "socket.io";

export function launchSocketserver (server){
    //Server is a class  object coming from socket.io module or library
    const io = new Server();
    // io.of('/trialroute').on('connection', (socket) => {
    //     socket.on('conn',data => {
    //       console.log("DATA:", data)})
    //       } )

    io.attach(server);
    let users = [];

    //Some tutorials may also mention io.sockets, it's simply an alias for io.of("/").
    // io.on("connection", (socket) => {});
    // io.use((socket, next) => { next() });
    // io.emit("hello");
    // are actually equivalent to
    // io.of("/").on("connection", (socket) => {});
    // io.of("/").u((se((socket, next) => { next() });
    // io.of("/").emit("hello")
    //The Server instance emits one single event: "connection"
    //Well, technically two, but connect is an alias for connection
    //the connection, connect and new_namespace strings are reserved and cannot be used in your application.

    io.sockets.on('connection', function (socket) {
        console.log("dee")
        // socket.on("Start-Chat", username => {
        //     try {
        //     const user = {
        //         username,
        //         id: socket.id,
        //     }
        //     users.push(user);
        //     io.emit("New User", users)
       
        //     } catch (err) {
        //         console.log(err);
        //     }
        // });
        //socket.on("Join Room!")
        socket.on('dis', data => {
            console.log(data)
        })
    });          

}

