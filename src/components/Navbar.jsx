import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../css/Navbar.css";

const Navbar = () => {
  const [showCartOverlay, setShowCartOverlay] = useState(false);
  const {
    currency,
    setCurrency,
    cartItems,
    cartItemCount,
    addToCart,
    decreaseQty,
  } = useCart();

  const navigate = useNavigate();

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <nav className="navbar">
      {/* Left Navigation Links */}
      <div className="nav-left">
        {["gun", "knife"].map((category) => (
          <NavLink
            key={category}
            to={`/${category}`}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </NavLink>
        ))}
      </div>

      {/* Center Logo */}
      <div className="nav-center">
        <NavLink to="/">
          <img src="/a-logo.svg" alt="Logo" style={{ height: "40px" }} />
        </NavLink>
      </div>

      {/* Right - Currency & Cart */}
      <div className="nav-right">
        <select value={currency} onChange={handleCurrencyChange}>
          <option value="$">$</option>
          <option value="€">€</option>
          <option value="₾">₾</option>
        </select>

        <div
          className="cart-container"
          onClick={() => setShowCartOverlay(!showCartOverlay)}
        >
          🛒
          {cartItemCount > 0 && (
            <span className="cart-count">{cartItemCount}</span>
          )}
        </div>
      </div>

      {/* Cart Overlay */}
      {showCartOverlay && (
        <div
          className="cart-backdrop"
          onClick={() => setShowCartOverlay(false)}
        >
          <div className="cart-overlay" onClick={(e) => e.stopPropagation()}>
            <p className="cart-title">
              <strong>My Bag</strong>, {cartItemCount} items
            </p>

            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-details">
                    <p className="item-name">{item.title}</p>
                    <p className="item-price">${item.price.toFixed(2)}</p>
                    <div className="item-qty">
                      <button
                        className="qty-btn"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => decreaseQty(item.id)}
                      >
                        −
                      </button>
                    </div>
                  </div>
                  <img
                    className="item-image"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
              ))
            )}

            {/* Total and Buttons */}
            <div className="cart-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="cart-buttons">
              <button
                className="view-bag"
                onClick={() => {
                  navigate("/cart");
                  setShowCartOverlay(false);
                }}
              >
                VIEW BAG
              </button>
              <button className="checkout">CHECK OUT</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
