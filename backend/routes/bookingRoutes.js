const router = require("express").Router();
const { book, getUserBookings } = require("../controllers/bookingController");

router.post("/book", book);
router.get("/bookings/:userId", getUserBookings);

module.exports = router;
