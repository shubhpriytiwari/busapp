const router = require("express").Router();
const { getWallet } = require("../controllers/walletController");

router.get("/wallet/:userId", getWallet);

module.exports = router;
