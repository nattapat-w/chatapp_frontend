import React from "react";
import { Link } from "react-router-dom";
import FormButton from "./FormUI/FormButton";
import FormContainer from "./FormUI/FormContainer";
import FormHeader from "./FormUI/FormHeader";
import FormInput from "./FormUI/FormInput";

const LoginForm = () => {
  return (
    <FormContainer>
      <FormHeader title="Welcome!" subtitle="Sign in to your account" />
      <FormInput
        label="Username"
        type="text"
        id="username"
        placeholder="Enter your username"
      />
      <FormInput
        label="Password"
        type="password"
        id="password"
        placeholder="Enter your password"
      />
      <FormButton>Sign in</FormButton>
      <span className="flex mt-12 justify-center">
        Don't have an account?
        <Link
          to="/register"
          className="ml-1 text-theme-mainColor font-bold hover:underline"
        >
          Sign up
        </Link>
      </span>
    </FormContainer>
  );
};

export default LoginForm;
