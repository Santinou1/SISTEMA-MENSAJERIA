import { response, request } from "express";
import { after } from "node:test";
import { isConstructorDeclaration } from "typescript";
const Message = require("../models/Message");
const { findChatById } = require("./chat");

const getMessages = async (req = request, res = response) => {
  try {
    const messages = await Message.find();
    return res.status(200).json({ msj: "see messages", ok: true, messages });
  } catch (error) {
    console.log(error);
    throw new Error("Error in getMessages");
  }
};

const sendMessage = async (req = request, res = response) => {
  const chatId = req.params.chatId;

  try {
    const chat = await findChatById(chatId);
    if (!chat) {
      return res.status(404).json({
        ok: false,
        msg: "chat does not exist for that id",
      });
    }

    
    const messagesAct = await Message.find({
      chat: chatId,
    });
    const lastMessage = messagesAct[messagesAct.length - 1];
    console.log(lastMessage)
    const receivedMessage= await Message.findOneAndUpdate(
      {
        _id: lastMessage._id,
      },
      { isReceived: true }
    );
    console.log(receivedMessage)

    const message = new Message({
      ...req.body,
      isReceived: false,
      chat: chat._id,
    });
    const newMessage = await message.save();
    res.json({
      ok: true,
      evento: newMessage,
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error in sendChat");
  }
};

module.exports = { sendMessage, getMessages };
