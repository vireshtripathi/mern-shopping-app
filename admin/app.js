const express = require("express");
const db = require("./config/config");
const bodyParser = require("body-parser");
const cors = require("cors");
const productRoutes = require("./controllers/productController");
const cartRoutes = require("./controllers/cartController");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api", productRoutes);
app.use("/api", cartRoutes);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
