import React from "react";
import { useCart } from "../context/CartContext";
import "../css/ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart, currency, exchangeRates } = useCart();

  const convertedPrice = product.price * exchangeRates[currency];

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.title} />
        <button className="cart-icon" onClick={() => addToCart(product)}>
          <img src="/cart-svg.svg" style={{ filter: "invert(100%)" }} />
        </button>
      </div>
      <h3>{product.title}</h3>
      <p>
        {currency}
        {convertedPrice.toFixed(2)}
      </p>
    </div>
  );
};

export default ProductCard;
