const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  telp: String,
  email: String,
  createdAt: Date
})

module.exports = mongoose.model("User", schema, "users");