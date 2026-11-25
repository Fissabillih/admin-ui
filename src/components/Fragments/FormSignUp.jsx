import React, { useState } from "react";
import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

function FormSignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {/* judul start */}
      <div className="mt-6 mb-8 text-center">
        <h2 className="text-xl font-bold text-defaultBlack">Create an account</h2>
      </div>
      {/* judul end */}

      {/* form start */}
      <div>
        <form action="">
          <div className="mb-6">
            <LabeledInput
              label="Name"
              id="name"
              type="text"
              placeholder="Tanzir Rahman"
              name="name"
            />
          </div>
          <div className="mb-6">
            <LabeledInput
              label="Email Address"
              id="email"
              type="email"
              placeholder="hello@example.com"
              name="email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold mb-2 text-defaultBlack">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••••••"
                name="password"
                className="py-3 pl-4 pr-10 text-sm rounded-md w-full bg-white border border-gray-03 text-gray-01 focus:border-primary focus:outline-none focus:ring-0"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-03 hover:text-gray-01"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 4.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* terms of service */}
          <p className="text-xs text-gray-02 mb-5">
            By continuing, you agree to our{" "}
            <a className="text-primary cursor-pointer">terms of service.</a>
          </p>

          <Button type="submit" variant="primary">
            Sign up
          </Button>
        </form>
      </div>
      {/* form end */}

      {/* divider start */}
      <div className="my-8 flex items-center justify-center gap-3 text-xs text-gray-03">
        <div className="border-t border-gray-05 flex-1"></div>
        <span className="bg-special-mainBg px-2">or sign up with</span>
        <div className="border-t border-gray-05 flex-1"></div>
      </div>
      {/* divider end */}

      {/* sign up with google start */}
      <div className="mb-8">
        <Button type="button" variant="secondary">
          <span className="flex items-center justify-center gap-2">
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 48 48">
              <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" fill="#FBBC05" />
              <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" fill="#EB4335" />
              <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" fill="#34A853" />
              <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" fill="#4285F4" />
            </svg>
            Continue with Google
          </span>
        </Button>
      </div>
      {/* sign up with google end */}

      {/* link ke sign in start */}
      <div className="flex justify-center text-sm text-gray-02">
        <span>Already have an account?&nbsp;</span>
        <Link to="/login" className="text-primary font-bold">
          Sign in here
        </Link>
      </div>
      {/* link ke sign in end */}
    </>
  );
}

export default FormSignUp;
