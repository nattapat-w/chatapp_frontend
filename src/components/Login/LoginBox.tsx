import React from "react";
import { Link } from "react-router-dom";

const LoginBox = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-96 bg-white shadow-lg rounded-lg p-12 pb-6">
        <h2 className="text-3xl font-bold">Welcome!</h2>
        <h2 className="text-md mb-8">Sign in to your account</h2>
        <div className="mb-6">
          <label htmlFor="username" className="block text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary"
          />
        </div>
        <Link to="/"><button className="mt-6 w-full relative flex items-center justify-center py-2 rounded overflow-hidden shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-500 before:duration-500 before:ease-out hover:shadow-orangebg-orange-500 hover:before:h-80 hover:before:w-80 bg-light-mainTheme text-white">
          <span className="relative z-10">Sign in</span>
        </button></Link>
        <span className="flex mt-12 justify-center">
          Don't have an account ?
          <Link to="/register" className="ml-1 text-black font-bold">
            Sign up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginBox;
