import React from "react";
import logo from "./../../img/image 2.svg";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = ({ dark, setDark }) => {
  return (
    <div style={{ background: dark ? "rgb(3,37,65)" : "" }} id="Header">
      <div className="container">
        <div className="Header">
          <img src={logo} alt="logo" />
          <div className="header-rigth">
            <nav>
              <NavLink style={{ color: dark ? "#FFF" : "" }} to="/menu">
                Menu
              </NavLink>
              <NavLink style={{ color: dark ? "#FFF" : "" }} to="/orders">
                Orders
              </NavLink>
              <NavLink style={{ color: dark ? "#FFF" : "" }} to="/">
                Admin
              </NavLink>
            </nav>
            <label class="switch">
              <input type="checkbox" onClick={() => setDark(!dark)}/>
              <span class="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
