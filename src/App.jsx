import "./App.css";
import { useState } from "react";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";

function App() {
  const [page, setPage] = useState("signin");

  return (
    <>
      {page === "signin" ? (
        <SignInPage onSignUp={() => setPage("signup")} />
      ) : (
        <SignUpPage onSignIn={() => setPage("signin")} />
      )}
    </>
  );
}

export default App;
