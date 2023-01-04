import { response, request } from "express";
const  Chat  = require("../models/Chat");
const  Message  = require("../models/Message");
const { findCustomer, createCustomer } = require("./customer");

const getChat = async (req = request, res = response) => {
  try {
    const chats = await Chat.find();
    return res.status(200).json({ ok: true, chats });
  } catch (error) {
    return res.status(500).send("error in getChat");
  }
};

const createChat = async (req = request, res = response) => {
  const { customer, text, location } = req.body;

  const existCustomer = await findCustomer(customer.firstName);
  if (existCustomer.ok) {
    res.json({
      ok: false,
      msg: "there is already a chat with this user send him a message",
    });
  } else {
    const newClient = await createCustomer(customer);
    if (newClient.ok) {
      console.log("NEWWWW", newClient);

      const chat = new Chat({
        isFavourite: false,
        customer: newClient.customer._id,
      });
      const newChat = await chat.save();
      const message = new Message({
        isReceived: false,
        text,
        location,
        chat: newChat._id,
      });
      const newMessage = await message.save();
      console.log("chat", chat);
      console.log(newChat);
      console.log(message);
      console.log(newMessage);

      res.json({
        ok: true,
        chat: newChat,
        message: newMessage,
        customer: newClient.customer,
      });
    }
  }
};

const findChatById = async (id: string) => {
  return await Chat.findById(id);
};

const updateChat = async (req = request, res = response) => {
  const chatId = req.params.id;
  const {isFavourite}= req.body;

  try {
    const chat = await findChatById(chatId);

    if (!chat) {
      return res.status(404).json({
        ok: false,
        msg: "chat does not exist for that id",
      });
    }



    const chatUpdated = await Chat.findByIdAndUpdate(chatId, {
      isFavourite: isFavourite,
    });
    

    res.json({
      ok: true,
      chat: chatUpdated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const deleteChat = async (req = request, res = response) => {
  const chatId = req.params.id;
  // const uid = req.uid;

  try {
    const chat = await Chat.findById(chatId);

    if (!chat) {
      return res.status(404).json({
        ok: false,
        msg: "chat no existe por ese id",
      });
    }

    // if ( chat.user.toString() !== uid ) {
    //     return res.status(401).json({
    //         ok: false,
    //         msg: 'No tiene privilegio de eliminar este chat'
    //     });
    // }

    await Chat.findByIdAndDelete(chatId);

    res.json({ ok: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};
module.exports = { getChat, createChat, findChatById, updateChat, deleteChat };
