const User = require("../models/User");

exports.getWallet = async (req, res) => {
  const user = await User.findById(req.params.userId);
  res.json({ walletBalance: user.walletBalance });
};
