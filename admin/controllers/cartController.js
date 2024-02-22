const express = require("express");
const router = express.Router();
const { Cart, Products, ProductMedia } = require("../models");

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
          include: ProductMedia,
        },
      ],
    });
    res.status(201).json(cartList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/cart/:itemId", async (req, res) => {
  try {
    const itemId = req.params.itemId;

    // Use Sequelize to find the cart item by ID and then delete it
    const cartItem = await Cart.findByPk(itemId);
    if (!itemId) {
      return res.status(404).json({ error: "Cart item not found" });
    }
    await itemId.destroy();
    return res.status(200).json({ message: "Cart item deleted successfully" });
  } catch (error) {
    console.error("Error deleting cart item:", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
