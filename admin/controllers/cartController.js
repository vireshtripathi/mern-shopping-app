const express = require("express");
const router = express.Router();
const { Cart, Products } = require("../models");

router.post("/cart/add", async (req, res) => {
  const { user_id, prod_id, qty } = req.body;
  try {
    const newCart = await Cart.create({ user_id, prod_id, qty });
    res.status(201).json(newCart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/cart/view", async (req, res) => {
  try {
    const cartList = await Cart.findAll({
      include: [
        {
          model: Products,
        },
      ],
    });
    res.status(201).json(cartList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
