import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout';
import AllProducts from './components/AllProduct/allProduct';
import EditProduct from './components/EditProduct/EditProduct';
import AddProduct from './components/AddProduct/AddProduct';
import ProductDetails from "./components/productDetails/productDetails";
import SearchProduct from './components/SearchProduct/searchProduct';
import SignUp from './components/Signup/Signup';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
const user = localStorage.getItem("token");
console.log(user);

root.render(
  <BrowserRouter>
    <Routes>  
      <Route path="/" exact element={<Layout />}>
        <Route path="signup" exact element={<SignUp />} />
        <Route path="login" exact element={<Login />} />
        <Route path="home" index element={<Home />} />
        <Route path="addproduct" exact element={<AddProduct />} />
        <Route path="editproduct/:editID" exact element={<EditProduct />} />
        <Route path="productdetails/:productID" exact element={<ProductDetails />} />
        <Route path="searchproduct/:searchID" exact element={<SearchProduct />} />
        <Route path='allProducts'  exact element={<AllProducts />} />
      </Route> 
    </Routes>
  </BrowserRouter>
);
