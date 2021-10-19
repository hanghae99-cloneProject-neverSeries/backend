const { Product } = require("../models/products");
const { Op } = require("sequelize");
const { User } = require("../models/users");
const { Round } = require("../models/rounds");
const { Like } = require("../models/likes");

const getProcess = {
  //홈화면 전체 상품 조회
  getProduct: async (req, res) => {
    try {
      const products = await Product.findAll({});
      res.status(201).send({ ok: true, result: products });
    } catch (err) {
      res.status(400).send({
        ok: false,
        message: "상품 조회 오류 발생",
      });
    }
  },

  getMypage: async (req, res) => {
    try {
    } catch (err) {}
  },

  postMuffinCharge: async (req, res) => {
    try {
    } catch (err) {}
  },
};
