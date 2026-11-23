import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignUp from "../components/Fragments/FormSignUp";

function SignUp({ onSignIn }) {
  return (
    <AuthLayout>
      <FormSignUp onSignIn={onSignIn} />
    </AuthLayout>
  );
}

export default SignUp;
