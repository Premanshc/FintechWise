import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logoimage">
          <img src="/logo.png" />
        </div>

        <div className="navlinks">
          <Link to="/">Home</Link>
          <a href="#">Mutual Funds</a>
          <a href="#">Stocks</a>
          <a href="#">Expense Manager</a>
        </div>


        <div className="navButtons">
          <a href="#">Login</a>
          <a className="btn" href="#">Get Started</a>
        </div>  
      </div>
    </>
  );
};

export default navbar;
