import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPages";

function App() {
  return (
    <div>
      <Navbar />
      {/* Add your routes and other components here later */}
      <ProductPage />
    </div>
  );
}

export default App;
