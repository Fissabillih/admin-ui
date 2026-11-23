import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignIn from "../components/Fragments/FormSignIn";

function SignIn({ onSignUp }) {
  return (
    <AuthLayout>
      <FormSignIn onSignUp={onSignUp} />
    </AuthLayout>
  );
}

export default SignIn;
