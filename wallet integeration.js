import React, { useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";

const WalletIntegration = () => {
  const [connected, setConnected] = useState(false);
  const [balance, setBalance] = useState(0);

  const connectWallet = async () => {
    if (window.solana) {
      const response = await window.solana.connect();
      setConnected(true);
      const connection = new Connection("https://api.mainnet-beta.solana.com");
      const balance = await connection.getBalance(new PublicKey(response.publicKey));
      setBalance(balance / 1e9); // Convert to SOL
    } else {
      alert("Solana wallet not found!");
    }
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg text-center">
      {!connected ? (
        <button className="btn-yellow" onClick={connectWallet}>
          Connect Wallet
        </button>
      ) : (
        <div>
          <p>Wallet Connected</p>
          <p>Balance: {balance.toFixed(4)} SOL</p>
        </div>
      )}
    </div>
  );
};

export default WalletIntegration;
