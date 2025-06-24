import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../css/ProductDetailPage.css";
import dummyProducts from "../data/dummyProducts";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart, currency, exchangeRates } = useCart();

  const product = dummyProducts.find((p) => p.id === parseInt(id));
  if (!product) return <p>Product not found.</p>;

  const convertedPrice = product.price * exchangeRates[currency];

  return (
    <div className="product-detail-page">
      <div className="product-images">
        <div className="thumbnails">
          {[1, 2, 3].map((_, i) => (
            <img
              key={i}
              src={product.image}
              alt={`thumb-${i}`}
              className="thumb-img"
            />
          ))}
        </div>
        <div className="main-image">
          <img src={product.image} alt={product.title} />
        </div>
      </div>

      <div className="product-info">
        <h2>{product.title}</h2>
        <h3>{product.category}</h3>
        <h2>Price:</h2>
        <p className="price">
          {currency}
          {convertedPrice.toFixed(2)}
        </p>
        <h3>You will buy the best weapons in my store.</h3>
        <button onClick={() => addToCart(product)} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
