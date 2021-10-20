import React from "react";
// Importing link from react router dom
import { Link } from "react-router-dom";
import useFierbase from "../../hooks/useFirebase";
// Importing css file
import "./Header.css";

const Header = () => {
  const { user, logOut } = useFierbase();
  return (
    <div className="header-container">
      <h1 className="pharmacy-name">Royal Care Pharmacy</h1>
      <nav className="nav justify-content-center">
        <Link className="nav-link" to="/home">
          Home
        </Link>
        <Link className="nav-link" to="/products">
          Products
        </Link>
        <Link className="nav-link" to="/about/us">
          About us
        </Link>
        <Link className="nav-link" to="/contact/us">
          Contact us
        </Link>
        {user.email ? <p className="text-light m-2">{user.displayName}</p> : ""}
        {user.email ? (
          <button onClick={logOut}> Logout</button>
        ) : (
          <Link className="nav-link" to="/login">
            Login
          </Link>
        )}
        <Link className="nav-link" to="/register">
          Register
        </Link>
      </nav>
    </div>
  );
};

export default Header;
