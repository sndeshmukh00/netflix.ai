import React, { useRef, useState } from "react";
import Header from "./Header";
import formValidator from "../utils/validator";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleSignUpToggle = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmitClick = () => {
    const message = formValidator(email.current.value, password.current.value);
    setErrorMessage(message);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="netflix background cover"
        />
      </div>
      <div className="absolute bg-black bg-opacity-85 p-12 z-10 text-white w-3/12 left-0 right-0 mx-auto mt-44">
        <h1 className="text-3xl font-medium mb-4">
          {isSignIn ? "Sign In" : "Create a new account"}
        </h1>
        <form onSubmit={(e) => e.preventDefault()}>
          {!isSignIn && (
            <input
              placeholder="Full Name"
              type="text"
              className="py-2 px-4 my-2 w-full bg-zinc-700 rounded-md"
            />
          )}
          <input
            ref={email}
            placeholder="Email"
            type="email"
            className="py-2 px-4 my-2 w-full bg-zinc-700 rounded-md"
          />
          <input
            ref={password}
            placeholder="Password"
            type="password"
            className="py-2 px-4 my-2 w-full bg-zinc-700 rounded-md"
          />
          <p className="text-red-600 font-medium pt-2">{errorMessage}</p>
          <button
            className="px-4 py-2 my-6 bg-red-700 w-full rounded-md"
            onClick={() => handleSubmitClick()}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <p
          className="text-zinc-600 cursor-pointer"
          onClick={() => handleSignUpToggle()}
        >
          {isSignIn ? (
            <>
              New to Netflix? <span className="text-white">Sign Up now</span>.
            </>
          ) : (
            <>
              Already a member?
              <span className="text-white">Sign In now</span>.
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
