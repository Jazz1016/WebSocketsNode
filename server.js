// const express = require("express");
const path = require("path");
// const app = express();
// const server = require("http").createServer(app);
// const io = require("socket.io")(server);

const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

// io.on("connection", (socket) => {
//   console.log("new connection");
//   // const session = socket.request.session;
//   // session.connections++;
//   // session.save();
// });

// app.listen(3000, () => {
//   console.log("listening on port 3000");
//   // console.log(io.on);
// });
