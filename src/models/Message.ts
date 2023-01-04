import mongoose from "mongoose";


const MessageSchema = new mongoose.Schema({

  text: {
    type: String,
    required: true
  },

  isReceived: {
    type: Boolean
  },
  chat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chat',
    required: true
  },
  
  location: {
    type: [Number],
    index: '2d'
  }

},{ timestamps: true });

module.exports = mongoose.model("Message", MessageSchema);


