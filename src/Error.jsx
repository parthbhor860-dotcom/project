import React from "react";
import { IoMdHome } from "react-icons/io";
import { Route, Routes, Link, NavLink, useNavigate } from "react-router-dom";
import { GiOpenBook } from "react-icons/gi";
import App from "./App";
import "./Error.css";
const Error = () => {
  return (
    <div className="trr">
      <div className="rr">
        <h1 className="ll">404</h1>
        <h1>Oops! Page Not Found</h1>
        <p>
          The page you're looking for doesen't exist <br />
          or has been moved.
        </p>
        <br />
        <br />
        <button className="but">
          <NavLink className="nav" to="/">
          <IoMdHome />  Go to Home
          </NavLink>
          
        </button>
      </div>
      <div>
        <img
          className="ee"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx7zFn9_W6RofEBDXAu69qL_LdZjsW8lUiypPJBztsDA&s=10"
        ></img>
      </div>
    </div>
  );
};

export default Error;
