const express = require("express")
const app = express()
const http = require('http')
const cors = require('cors')
const server = http.createServer(app) 
const { Server } = require("socket.io")

app.use(cors())

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods : ["GET","POST"]
    }
})

io.on("connection" , (socket) => {
    console.log(socket.id);
    
    socket.on("disconnect", () => {
        console.log("user disconnected");
    })
})
  

server.listen(3001,() => {
    console.log("server is running");
})