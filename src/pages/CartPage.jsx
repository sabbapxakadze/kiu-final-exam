import React from "react";
import { useCart } from "../context/CartContext";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/CartPage.css";

const CartPage = () => {
  const { cartItems, addToCart, decreaseQty, currency, exchangeRates } =
    useCart();

  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-row">
          <div className="info">
            <h1>{item.title}</h1>
            <p>
              {currency}
              {(item.price * exchangeRates[currency]).toFixed(2)}
            </p>
            <div className="qty-controls">
              <button onClick={() => addToCart(item)}>+</button>
              <span>{item.quantity}</span>
              <button onClick={() => decreaseQty(item.id)}>-</button>
            </div>
          </div>
          <img src={item.image} alt={item.title} />
        </div>
      ))}

      <div className="summary">
        <h3>
          Total: {currency}
          {(total * exchangeRates[currency]).toFixed(2)}
        </h3>
        <button className="checkout" onClick={() => navigate("/shipping")}>
          CHECK OUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
