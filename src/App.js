import { Route, Routes } from "react-router-dom";
import Footer from "./components/Utilities/Footer";
import NavBar from "./components/Utilities/NavBar";
import LoginPage from "./pages/Auth/LoginPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
