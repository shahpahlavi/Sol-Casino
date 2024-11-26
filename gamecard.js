import React from "react";

const GameCard = ({ name }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-5 text-center shadow-lg">
      <h2 className="text-2xl font-bold text-yellow-500">{name}</h2>
      <button className="btn-yellow mt-4">Play</button>
    </div>
  );
};

export default GameCard;
