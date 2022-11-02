const express = require("express");
const router = express.Router();

//controllers
const {postCart, postProductCart, getAllCarts, getCartById,deleteCart,deleteProductInCart
} = require("../controllers/cart.controller");

//cart routers
router.get("/", getAllCarts);
router.get("/:id", getCartById);
router.post("/", postCart);
router.delete("/:id", deleteCart);

//products in cart router
router.post("/:id/productos", postProductCart);
router.delete("/:id/productos/:id_prod", deleteProductInCart);




module.exports = { cartRouter: router };
