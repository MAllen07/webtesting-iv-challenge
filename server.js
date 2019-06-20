const express = require("express");
const server = express();

// Import Routers
const doggosRouter = require("./doggos/doggos-router.js");

// Configure Middleware
server.use(express.json());

// Use Routers
server.use("/api/doggos", doggosRouter);

// Server Test
server.get("/", (req, res) => {
  res.status(200).send({ message: "Hi from Mindy!" });
});

module.exports = server;
