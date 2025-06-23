import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../css/CartOverlay.css";

const CartOverlay = ({ onClose }) => {
  const { cartItems, cartItemCount, addToCart, decreaseQty } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-backdrop" onClick={onClose}>
      <div className="cart-overlay" onClick={(e) => e.stopPropagation()}>
        <p className="cart-title">
          <strong>My Bag</strong>, {cartItemCount} items
        </p>

        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              <p className="item-name">{item.title}</p>
              <p className="item-price">${item.price.toFixed(2)}</p>
              <div className="item-qty">
                <button className="qty-btn" onClick={() => addToCart(item)}>
                  +
                </button>
                <span>{item.quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => decreaseQty(item.id)}
                >
                  -
                </button>
              </div>
            </div>
            <img className="item-image" src={item.image} alt={item.title} />
          </div>
        ))}

        <div className="cart-total">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <div className="cart-buttons">
          <button className="view-bag" onClick={() => navigate("/cart")}>
            VIEW BAG
          </button>
          <button className="checkout">CHECK OUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartOverlay;
