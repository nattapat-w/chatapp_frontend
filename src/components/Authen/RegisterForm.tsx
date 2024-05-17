import React from "react";
import { Link } from "react-router-dom";
import FormButton from "./FormUI/FormButton";
import FormContainer from "./FormUI/FormContainer";
import FormHeader from "./FormUI/FormHeader";
import FormInput from "./FormUI/FormInput";
const RegisterForm: React.FC = () => {
  return (
    <FormContainer>
      <FormHeader
        title="Nice to meet you!"
        subtitle="Sign up for a new account"
      />
      <FormInput
        label="Username"
        type="text"
        id="username"
        placeholder="Choose a username"
      />
      <FormInput
        label="Email"
        type="email"
        id="email"
        placeholder="Enter your email"
      />
      <FormInput
        label="Password"
        type="password"
        id="password"
        placeholder="Create a password"
      />
      <FormInput
        label="Confirm Password"
        type="password"
        id="confirm-password"
        placeholder="Confirm your password"
      />
      <FormButton>Sign up</FormButton>
      <span className="flex mt-12 justify-center">
        Already have an account?
        <Link to="/login" className="ml-1 text-theme-mainColor font-bold  hover:underline">
          Sign in
        </Link>
      </span>
    </FormContainer>
  );
};

export default RegisterForm;
