import React from "react";
// Importing link from react router dom
import { Link } from "react-router-dom";
// Importing css file
import "./Header.css";

const Header = () => {
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
      </nav>
    </div>
  );
};

export default Header;
