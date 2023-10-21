import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Home from "../Home";

const Pages = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Pages;
