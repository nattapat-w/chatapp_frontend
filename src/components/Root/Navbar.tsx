import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav className="fixed  top-0 left-0 w-full h-12 bg-light-primary text-black dark:bg-dark-primary dark:text-dark-text border-b dark:border-b dark:border-dark-border drop-shadow-sm z-50">
      <div className="px-4 lg:p-4 lg:px-6 h-full flex items-center justify-between">
        <div className="flex space-x-3">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/messenger" className="hover:text-gray-200">
            Messenger
          </Link>
          <Link to="/friends" className="hover:text-gray-200">
            Friends
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={changeTheme}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
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
