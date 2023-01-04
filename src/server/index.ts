import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
const chatRouter = require("../routes/chat");
const messageRouter = require("../routes/messages");

const { connection } = require("../database/config");

require("dotenv").config();

class Server {
  app: any;
  port: string | undefined;

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
  }

  async connectionDb() {
    await connection();
  }

  middlewares() {
    this.app.use(express.static("public"));
    this.app.use(cors());
    this.app.use(express.json());
  }

  routers() {
    this.app.use("/api/chats", chatRouter);
    this.app.use("/api/message", messageRouter);
  }

  listen() {
    this.middlewares()
    this.connectionDb()
    this.routers();
    this.app.listen(this.port, () => {
      console.log(`Db Succesfully connected in ${this.port}`);
    });
  }
}

module.exports = Server;
