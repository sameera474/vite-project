import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { NotFoundPage } from "./components/NotFoundPage";
import { ProductDetails } from "./components/ProductDetails";
// import { CategoryList } from "./CategoryList";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
