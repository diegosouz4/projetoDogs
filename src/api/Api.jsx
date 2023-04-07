import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Home from "../Views/Home";
import Login from "../Views/Login/Login";

function Api() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Api;
