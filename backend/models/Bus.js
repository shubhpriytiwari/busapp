const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  busId: String,
  name: String,
  from: String,
  to: String,
  fare: Number
});

module.exports = mongoose.model("Bus", busSchema);
