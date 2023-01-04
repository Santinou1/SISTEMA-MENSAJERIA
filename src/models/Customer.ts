import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  role:{
    type: String,
    required: true
  },
  creditCard: {
    type: String
  },
  phoneNumber: {
    type: String
  },
});

module.exports = mongoose.model("Customer",CustomerSchema);

