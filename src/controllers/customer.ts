import { ValidateCustomer } from "../interfaces";

const Customer = require("../models/Customer");

const findCustomer = async (parameter: string) => {
  try {
    const customer = await Customer.findOne({firstName:parameter});
    
    if (customer) {
      return {
        ok: true,
      };
    } else {
      return {
        ok: false,
      };
    }
  } catch (error) {
    console.log(error);
    return { ok: false, msg: "Hable con el administrador" };
  }
};

const createCustomer = async (customer: ValidateCustomer) => {
  const client = new Customer(customer);
  try {
    const newCustomer = await client.save();

    return {
      ok: true,
      customer: newCustomer,
    };
  } catch (error) {
    return { ok: false, msg: "Hable con el administrador" };
  }
};

module.exports = { findCustomer, createCustomer };
