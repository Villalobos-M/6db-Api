const { Schema, model } = require("mongoose");

const cartsSchema = new Schema({
   productsInCart: { 
      type: [], 
      required: true,
      default: []
   },
});

module.exports = model("Carts", cartsSchema);
