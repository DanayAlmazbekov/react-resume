import React from "react";
import About from "./Components/About/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import User from "./Components/User";
import MainRoutes from "./MainRoutes";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Section />
      {/* <About /> */}
      {/* <HomePage /> */}
      {/* <User /> */}
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
