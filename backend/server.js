const express = require("express");
const connectDB = require("./config/db");
const auth = require("./middleware/auth");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "http://localhost:4200",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type, Authorization"
}));

app.use(express.json());
app.use(auth);

connectDB();

app.use("/api", require("./routes/authRoutes"));
app.use("/api", require("./routes/busRoutes"));
app.use("/api", require("./routes/walletRoutes"));
app.use("/api", require("./routes/bookingRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
