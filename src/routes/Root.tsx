import React from "react";
import Navbar from "../components/Home/Navbar";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div className="h-screen dark:bg-dark-primary">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
