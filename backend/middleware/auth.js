module.exports = function (req, res, next) {
  if (req.path === "/api/login") return next();

  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ message: "No token provided" });

  const token = header.split(" ")[1];
  if (token !== "dummy-jwt-token")
    return res.status(401).json({ message: "Invalid token" });

  next();
};
