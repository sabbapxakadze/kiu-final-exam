import React from "react";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <button>Male</button>
        <button>Female</button>
        <button>Kids</button>
      </div>

      <div className="nav-center">
        <img src="/a-logo.svg" />
      </div>

      <div className="nav-right">
        <select name="currency">
          <option value="usd">$</option>
          <option value="eur">€</option>
          <option value="yen">¥</option>
        </select>
        <button>🛒</button>
      </div>
    </nav>
  );
};

export default Navbar;
