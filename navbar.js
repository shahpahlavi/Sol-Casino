import React from "react";

const Navbar = () => {
  return (
    <div className="navbar p-4 flex justify-between items-center text-yellow-500">
      <h1 className="text-2xl font-bold">win.fun</h1>
      <div>
        <button className="btn-yellow">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
