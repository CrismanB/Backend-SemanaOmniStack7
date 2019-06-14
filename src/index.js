const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const databaseconfig = require("./config/database");
const cors = require("cors");
const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

mongoose.connect(databaseconfig.uri, { useNewUrlParser: true });

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use(cors());

app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);

app.use(require("./routes"));

server.listen(3333);
