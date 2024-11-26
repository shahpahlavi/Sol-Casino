import React from "react";
import GameCard from "./GameCard";

const GameList = () => {
  const games = ["Limbo", "Plinko", "Dice", "Crash", "Blackjack", "Roulette"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {games.map((game, index) => (
        <GameCard key={index} name={game} />
      ))}
    </div>
  );
};

export default GameList;
