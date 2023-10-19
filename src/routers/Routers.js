import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import CompanysSection from "../components/UI/CompanySection";
import Login from "../assets/data/Login";
import Register from "../assets/data/Register";
import Trader from "../assets/data/Trader";
import CarForm from "../assets/data/CarForm";
import { ToastContainer } from "react-toastify";
import Vertrag from "../assets/data/Vertrag";


const Routers = () => {
  return (
    <div className="App">

<ToastContainer theme='colored' position='top-center'></ToastContainer>
    <Routes> 
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Company" element={<CompanysSection />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/trader" element={<Trader />} />
      <Route path="/carform" element={<CarForm />} />
      <Route path="/vertrag" element={<Vertrag />} />
      
    </Routes> 

    </div>

  );
};

export default Routers;
