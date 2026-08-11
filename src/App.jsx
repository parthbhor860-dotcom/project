import React from "react";
import { Route, Routes, Link, NavLink, useNavigate } from "react-router-dom";
import Home from "./Home";
import Book from "./Book";
import About from "./About";
import Error from "./Error";
import "./App.css";
import { GiOpenBook } from "react-icons/gi";

const App = () => {
  return (
    <div>
      <div className="main">
        <div className="hed">
          <h1>
            
            MyLibrary
          </h1>
        </div>
        <div className="header1">
          <NavLink className="nav" to="/">
            {" "}
            Home{" "}
          </NavLink>
          <NavLink className="nav" to="/Book">
            Book
          </NavLink>
          <NavLink className="nav" to="/About">
            About
          </NavLink>
        </div>
      </div>
      <div>
        <Routes>
          <Route path="*" element={<Error></Error>}>
            {" "}
          </Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Book" element={<Book></Book>}></Route>
          <Route path="/About" element={<About></About>}></Route>
        </Routes>
      </div>
    </div>
  )
};

export default App;
