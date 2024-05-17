import React, { ReactNode } from "react";

interface FormButtonProps {
  children: ReactNode;
}

const FormButton: React.FC<FormButtonProps> = ({ children }) => {
  return (
    <button className="mt-6 w-full flex items-center justify-center py-2 rounded overflow-hidden shadow-2xl  bg-theme-mainColor text-white">
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default FormButton;
