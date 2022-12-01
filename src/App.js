import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar"
import "./app.css"
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/product List/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <Router className="App">

      <Topbar />
      <div className="container">

        <Sidebar />


        <Routes>

          <Route path="/" element={<Home />} ></Route>

          <Route path="/users" element={<UserList />} ></Route>
          <Route path="/user/:id" element={<User />} ></Route>
          <Route path="/newuser" element={<NewUser />} ></Route>
          <Route path="/products" element={<ProductList />} ></Route>
          <Route path="/product/:id" element={<Product />} ></Route>
          <Route path="/newproduct" element={<NewProduct />} ></Route>

        </Routes>


      </div>
    </Router>
  );
}

export default App;
