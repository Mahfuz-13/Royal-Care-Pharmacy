import React from "react";
import { Link } from "react-router-dom";
import useFierbase from "../../hooks/useFirebase";

const Register = () => {
  const { signInUsingGoogle, registerUsingEmail } = useFierbase();
  return (
    <div>
      <h2>Register: Create Account</h2>
      <form onSubmit={registerUsingEmail}>
        <input type="email" name="" id="" placeholder="Your Email" />
        <br />
        <input type="password" name="" id="" placeholder="Your Password" />
        <br />
        <input type="password" name="" id="" placeholder="Re-enter Password" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
      <div>----------or-------------</div>
      <button onClick={signInUsingGoogle} className="btn btn-primary">
        Google Sign In
      </button>
    </div>
  );
};

export default Register;
