import React from "react";
import RegisterBox from "../components/Register/RegisterBox";

const RegisterPage = () => {
  return (
    <div className="flex pt-12 flex-col h-full lg:flex lg:h-full lg:pt-12 lg:flex-row bg-light-secondary">
      <div className="flex flex-grow justify-center items-center">
        <RegisterBox/>
      </div>
    </div>
  );
};

export default RegisterPage;
