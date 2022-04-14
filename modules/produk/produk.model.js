const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  qty: Number
})

module.exports = mongoose.model("Produk", schema, "produks");