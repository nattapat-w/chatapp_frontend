import React from "react";
import LoginBox from "../components/Login/LoginBox";

const LoginPage = () => {
  return (
    <div className="flex pt-12 flex-col h-full lg:flex lg:h-full lg:pt-12 lg:flex-row bg-light-secondary">
      <div className="flex flex-grow justify-center items-center">
        <LoginBox />
      </div>
    </div>
  );
};

export default LoginPage;
