import React from "react";

interface FormInputProps {
  label: string;
  type: string;
  id: string;
  placeholder: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  id,
  placeholder,
}) => {
  return (
    <div className="mb-8">
      <label htmlFor={id} className="block text-gray-700 dark:text-dark-text mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full border border-gray-300 dark:border-none bg-light-inputBg dark:bg-dark-inputBg rounded px-4 py-2 focus:outline-none focus:border-primary"
      />
    </div>
  );
};

export default FormInput;
