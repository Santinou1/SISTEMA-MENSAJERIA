import { Router } from "express";
import { check } from "express-validator";

const {
  getChat,
  createChat,
  updateChat,
  deleteChat,
} = require("../controllers/chat");
const { isCustomer } = require('../helpers/isCustomer');
const { validateFields } = require("../middlewares/validateFields");

const router = Router();
  
router.get( "/",getChat);
router.post("/",[
  check("customer", "the customer is required").custom(isCustomer),
  check("text", "the text is required").not().isEmpty(),
  check("location", "the location is required").isArray(),
  validateFields,
], createChat);
router.put(
  "/:id",
  [check("isFavourite", "is required").isBoolean(), validateFields],
  updateChat
);
router.delete("/:id", deleteChat);

module.exports = router;
