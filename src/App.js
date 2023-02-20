import { Route, Routes } from "react-router-dom";
import Footer from "./components/Utilities/Footer";
import NavBar from "./components/Utilities/NavBar";
import LoginPage from "./pages/Auth/LoginPage";
import SignupPage from "./pages/Auth/SignupPage";
import BrandsPage from "./pages/Brand/BrandsPage";
import CategriesPage from "./pages/Categries/CategriesPage";
import HomePage from "./pages/HomePage/HomePage";
import ShopProductsPage from "./pages/Products/ShopProductsPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/categries" element={<CategriesPage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/products" element={<ShopProductsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
