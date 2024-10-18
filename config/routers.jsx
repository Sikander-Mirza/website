import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "../screens/Home/home";
import NavigationBar from "../components/navbar/navbar";
import Footer from "../components/footer/Footer";
import ProductDetails from "../screens/ProductDetails/ProductDetails";
import Shop from "../screens/Shop/Shop";
import Cart from "../screens/Cart/Cart";
import Contact from "../screens/Contact/Contact";


const Routers = () => {
  return (
    <BrowserRouter>
    <NavigationBar/>
<Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/ProductDetails" element={<ProductDetails/>} />
    <Route path="/Shop" element={<Shop/>} />
    <Route path="/Cart" element={<Cart/>} />
    <Route path="/Contact" element={<Contact/>} />
</Routes>
<Footer/>
    </BrowserRouter>
  );
};

export default Routers;
