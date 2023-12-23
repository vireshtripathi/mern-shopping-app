const express = require("express");
const router = express.Router();
const { Products, ProductMedia } = require("../models");

// Get all products
router.get("/products", async (req, res) => {
  try {
    const products = await Products.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get a single product by ID
router.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.findByPk(id, {
      include: [
        {
          model: ProductMedia,
        },
      ],
    });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
