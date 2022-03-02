const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const path = require("path");
const { Server } = require("socket.io");
app.use(cors());
app.use(express.static("public"));

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);
  
  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });
  
  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
  
  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

app.get('/', (req, res) => { res.send('Hello from Express!')
})

server.listen(PORT, () => {
  console.log("SERVER RUNNING");
});