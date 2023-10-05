import React from "react";
import logo from "./../../img/image 2.svg";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="Header">
      <div className="container">
        <div className="Header">
          <img src={logo} alt="logo" />
          <nav>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/orders">Orders</NavLink>
            <NavLink to="/">Admin</NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
