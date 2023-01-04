import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
  isFavourite: {
    type: Boolean,
    required: true
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },

});

module.exports = mongoose.model('Chat', ChatSchema);
