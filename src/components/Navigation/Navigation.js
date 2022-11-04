import React from "react";
import hamburger from "../../assets/images/icon-hamburger.svg";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      <header>
        <div className="header-container">
          <div className="planetlogo-container">
            <h2>THE PLANETS</h2>
          </div>
          <div className="planets-links-container">
            <NavLink to="mercury">MERCURY</NavLink> 
            <NavLink to="venus">VENUS</NavLink>
            <NavLink to="">EARTH</NavLink>
            <NavLink to="mars">MARS</NavLink>
            <NavLink to="jupiter">JUPITER</NavLink>
            <NavLink to="saturn">SATURN</NavLink>
            <NavLink to="uranus">URANUS</NavLink>
            <NavLink to="neptune">NEPTUNE</NavLink>
          </div>
          <div className="hamburger">
            <img src={hamburger} alt="" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Navigation;
