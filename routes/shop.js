const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const adminData = require("./admin");
const router = express.Router();

router.get("/", (req, res, next) => {
  //   console.log("shop.js", adminData.products);
  //   res.sendFile(path.join(rootDir, "views", "shop.html"));
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    activeShop: true,
    hasProducts: products.length > 0,
    productsCSS: true,
  });
});

module.exports = router;