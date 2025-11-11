const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: mongoose.Types.ObjectId,
  bookingId: String,
  busId: String,
  amount: Number,
  status: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Booking", bookingSchema);
