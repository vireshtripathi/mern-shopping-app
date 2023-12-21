const express = require("express");
const router = express.Router();
const { Products } = require("../models");

// Get all products
router.get("/products", async (req, res) => {
  try {
    const products = await Products.findAll();
    console.log(products);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
