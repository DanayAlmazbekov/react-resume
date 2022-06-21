import React from "react";

import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import HomePage from "./Components/HomePage";
import User from "./Components/User";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/about" element={<About />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
};

export default MainRoutes;
