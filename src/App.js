import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPages";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/knife" element={<ProductPage category="Knife" />} />
            <Route path="/gun" element={<ProductPage category="Gun" />} />
            <Route path="/" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
