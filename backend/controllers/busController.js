const Bus = require("../models/Bus");

exports.getBuses = async (req, res) => {
  const buses = await Bus.find();
  res.json(buses);
};
