const Booking = require("../models/Booking");
const User = require("../models/User");
const Bus = require("../models/Bus");

exports.book = async (req, res) => {
  const { userId, busId } = req.body;

  const user = await User.findById(userId);
  const bus = await Bus.findOne({ busId });

  if (!user || !bus)
    return res.status(400).json({ message: "Invalid user or bus" });

  if (user.walletBalance < bus.fare)
    return res.status(400).json({ message: "Insufficient balance" });

  user.walletBalance -= bus.fare;
  await user.save();

  const booking = await Booking.create({
    userId,
    bookingId: "BK" + Math.floor(Math.random() * 10000),
    busId,
    amount: bus.fare,
    status: "Success"
  });

  res.json(booking);
};

exports.getUserBookings = async (req, res) => {
  const bookings = await Booking.find({ userId: req.params.userId });
  res.json(bookings);
};
