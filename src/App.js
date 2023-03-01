import { Route, Routes } from "react-router-dom";
import Footer from "./components/Utilities/Footer";
import NavBar from "./components/Utilities/NavBar";
import AdminAddBrandPage from "./pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./pages/Admin/AdminAddSubCategoryPage";
import AdminOrderDetailsPage from "./pages/Admin/AdminOrderDetailsPage";
import AdminOrdersManagmentPage from "./pages/Admin/AdminOrdersManagmentPage";
import AdminProductsManagmentPage from "./pages/Admin/AdminProductsManagmentPage";
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
        <Route path="/order/payment-method" element={<PaymentMethod />} />

        <Route
          path="/admin/orders-managment"
          element={<AdminOrdersManagmentPage />}
        />
        <Route
          path="/admin/products-managment"
          element={<AdminProductsManagmentPage />}
        />
        <Route path="/admin/order/25" element={<AdminOrderDetailsPage />} />
        <Route path="/admin/add-brnad" element={<AdminAddBrandPage />} />
        <Route path="/admin/add-category" element={<AdminAddCategoryPage />} />
        <Route
          path="/admin/add-subcategory"
          element={<AdminAddSubCategoryPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
