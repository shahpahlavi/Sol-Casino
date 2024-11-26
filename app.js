import React from "react";
import Navbar from "./components/Navbar";
import WalletIntegration from "./components/WalletIntegration";
import GameList from "./components/GameList";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <WalletIntegration />
        <GameList />
      </div>
    </div>
  );
};

export default App;
