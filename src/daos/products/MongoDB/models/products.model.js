const { Schema, model } = require("mongoose");

const productSchema = new Schema({
   name: {
      type: String,
      max: 50,
      required: true,
   },
   description: {
      type: String,
      max: 150,
   },
   code: {
      type: String,
      max: 20,
      required: true,
   },
   thumbnail: {
      type: String,
      max: 50,
      required: true,
   },
   price: {
      type: Number,
      max: 100,
      required: true,
   },
   stock: {
      type: Number,
      max: 100,
      required: true,
   },
   timestamp: {
      type: Date,
      default: Date.now,
      required: true,
   },
});

module.exports = model("Products", productSchema);
