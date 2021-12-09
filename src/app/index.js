import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./../pages/home";
import "./../assets/css/bootstrap.min.css";
import "./../assets/css/style.css";
import { useLocation } from "react-router";

const App = () => {
  const { pathname } = useLocation();

  const getColor = () => {
    if (pathname === "/home/primary") {
      return "#02044a";
    } else {
      return "#024A46";
    }
  };

  return (
    <>
      <Header color={getColor()} />
      <Routes>
        <Route path="/home/primary" element={<Home color={getColor()} />} />
        <Route
          exact
          path="/home/secondary"
          element={<Home color={getColor()} />}
        />
        <Route path="/" element={<Navigate to="/home/primary" />} />
      </Routes>
      <Footer color={getColor()} />
    </>
  );
};

export default App;
