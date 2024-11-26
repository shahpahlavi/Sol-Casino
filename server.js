const express = require("express");
const cors = require("cors");
const gamesRoutes = require("./routes/games");
const walletRoutes = require("./routes/wallet");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/games", gamesRoutes);
app.use("/api/wallet", walletRoutes);

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
