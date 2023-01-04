import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
require("dotenv").config();

async function connection() {
  const mongoDb =
    "mongodb+srv://santitech:123456san@cluster0.jsoauon.mongodb.net/chats?retryWrites=true&w=majority";
  try {
    mongoose.connect(mongoDb);
    console.log("Db Connect");
  } catch (error) {
    throw new Error("error in database");
  }
}

module.exports = { connection };
