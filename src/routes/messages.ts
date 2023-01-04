const { Router } = require("express");
const { check } = require("express-validator");
const { sendMessage, getMessages } = require("../controllers/messages");
const validate = require ("../middlewares/validateFields");

const router = Router();

router.get("/", getMessages);
router.post("/:chatId",[
  check("text", "the text is required").isString(),
  check("location", "the location is required").isArray(),
  validate.validateFields,
], sendMessage);

module.exports = router;
