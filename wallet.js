const express = require("express");
const router = express.Router();

router.post("/deposit", (req, res) => {
  const { walletAddress, amount } = req.body;
  // Logic to handle deposit on Solana blockchain
  res.send({ success: true, message: "Deposit successful!" });
});

router.post("/withdraw", (req, res) => {
  const { walletAddress, amount } = req.body;
  // Logic to handle withdrawal
  res.send({ success: true, message: "Withdrawal successful!" });
});

module.exports = router;
