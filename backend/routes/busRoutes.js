const router = require("express").Router();
const { getBuses } = require("../controllers/busController");

router.get("/buses", getBuses);

module.exports = router;
