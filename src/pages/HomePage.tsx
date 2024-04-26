import React from "react";
import Navbar from "../components/Root/Navbar";
import Sidebar from "../components/Home/Sidebar";
import Feedbox from "../components/Home/Feedbox";
import Peoplebar from "../components/Home/Peoplebar";

const HomePage = () => {
  return (
    <>
      <div className="flex pt-12 flex-col h-full lg:flex lg:pt-12 lg:flex-row bg-light-primary dark:bg-dark-primary overflow-auto">
        <Sidebar/>
        <Feedbox/>
        <Peoplebar/>
      </div>
    </>
  );
};

export default HomePage;
