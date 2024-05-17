import React, { ReactNode } from "react";

interface FormContainerProps {
  children: ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-full w-[32rem]">
      <div className=" bg-white dark:bg-dark-secondary dark:text-dark-text shadow-lg rounded-lg p-12 pb-6 w-11/12">
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
