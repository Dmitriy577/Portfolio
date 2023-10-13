import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-8" id="header">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">jhiujholiuiuiu</a>
          <h1>vf;lblblgglbglgblgblgl</h1>
          <NavLink to={"/header"} className="header__link">
            Header
          </NavLink>
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
