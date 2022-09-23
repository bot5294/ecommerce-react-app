import Navbar from "./Navbar";
import { NotificationContainer } from "react-notifications";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Fof } from "../pages/Fof";
import Products from "../pages/Products";
import { AddProduct } from "../pages/AddProduct";
// js and css file import as needed for notifications
import "../../node_modules/react-notifications/dist/react-notifications";
import "../../node_modules/react-notifications/dist/react-notifications.css";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <NotificationContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="*" element={<Fof />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
