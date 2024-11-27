import React, { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";

const Login = () => {
  const { handleGoogleLogin, handleRegister } = useContext(authContext);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    
    handleRegister(email, password)
      .then(() => {
        console.log("Login successful");
      })
      .catch((err) => {
        setError(err.message || "An error occurred.");
      });
  };

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <h3>If you are new here, please register first.</h3>
        <NavLink to={"/register"}>Register</NavLink>
        <h4>Or</h4>
        <button onClick={handleGoogleLogin}>Login With Google</button>
      </div>
      <h3>Already registered? Please log in.</h3>
      <form onSubmit={handleSubmit}>
        <div className="my-4">
          Email:{" "}
          <input
            type="email"
            placeholder="Enter your email"
            className="input border border-spacing-1 border-slate-400 ml-2 w-full max-w-xs"
            name="email"
            required
          />
        </div>
        <div className="my-4">
          Password:{" "}
          <input
            type="password"
            placeholder="Enter your password"
            className="input border border-spacing-1 border-slate-400 ml-2 w-full max-w-xs"
            name="password"
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <NavLink to={"/myProfile"}>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        </NavLink>
      </form>
      <button onClick={handleGoogleLogin} className='btn btn-secondary'>Login with Google</button>
    </div>
  );
};

export default Login;
