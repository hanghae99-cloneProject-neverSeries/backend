const express = require("express");
const router = express.Router();
const { login } = require("./controller/login");

router.route("/").post(login);

module.exports = router;
