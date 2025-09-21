import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Navbar from "./components/common/Navbar";
import NavMenu from "./components/common/NavMenu";
const App = () => {
  
  return (
    <div className="text-white">
      <Navbar />
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;
