import React from "react";

interface FormHeaderProps {
  title: string;
  subtitle: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({ title, subtitle }) => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-1">{title}</h2>
      <h2 className="text-md mb-8">{subtitle}</h2>
    </>
  );
};

export default FormHeader;
