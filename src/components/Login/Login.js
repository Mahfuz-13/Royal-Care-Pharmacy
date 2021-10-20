import React from "react";
import { Link } from "react-router-dom";
import useFierbase from "../../hooks/useFirebase";

const Login = () => {
  const { signInUsingGoogle } = useFierbase();
  return (
    <div>
      <h2>Login</h2>
      <form>
        <input type="email" name="" id="" placeholder="Your Email" />
        <br />
        <input type="password" name="" id="" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p>
        new to Royal Care Pharmacy? <Link to="/register">Create Account</Link>
      </p>
      <div>-------or----------</div>
      <button onClick={signInUsingGoogle} className="btn btn-primary">
        Google Sign In
      </button>
    </div>
  );
};

export default Login;
