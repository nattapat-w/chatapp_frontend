import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);
  return (
    <nav className="fixed top-0 left-0 w-full h-12 bg-light-primary text-black dark:bg-dark-primary dark:text-dark-text border-b dark:border-b dark:border-dark-border drop-shadow-sm z-50">
      <div className="px-4 lg:p-4 lg:px-6 h-full flex items-center justify-between">
        <div className="flex space-x-3">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/messenger" className="hover:text-gray-200">
            Messenger
          </Link>
          <Link to="/messenger" className="hover:text-gray-200">
            Friends
          </Link>
          <button onClick={changeTheme}>Change Theme</button>
        </div>
        <div>
          <Link to="/login" className="hover:text-gray-200">
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
