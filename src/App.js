import { Route, Routes } from "react-router-dom";
import Footer from "./components/Utilities/Footer";
import NavBar from "./components/Utilities/NavBar";
import AdminPage from "./pages/Admin/AdminPage";
import LoginPage from "./pages/Auth/LoginPage";
import SignupPage from "./pages/Auth/SignupPage";
import BrandsPage from "./pages/Brand/BrandsPage";
import CartPage from "./pages/Cart/CartPage";
import CategriesPage from "./pages/Categries/CategriesPage";
import PaymentMethod from "./pages/Checkout/PaymentMethod";
import HomePage from "./pages/HomePage/HomePage";
import ProductDetailsPage from "./pages/Products/ProductDetailsPage";
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
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="order/payment-method" element={<PaymentMethod />} />

        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
