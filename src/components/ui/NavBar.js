import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import pokemonTitle from "../../images/pokemon-title.png";

export const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <header className="header">
        <NavLink to="/" className="header__link">
          <img
            className="header__logo"
            src={pokemonTitle}
            alt="Pokemon - app"
          />
        </NavLink>

        <nav className="header__navegation">
          <div className="header__icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav activeUl" : "nav"}>
            <li className="nav__item" onClick={handleClick}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav__links ${isActive ? "nav__links--active" : "nav__links"}`
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav__item" onClick={handleClick}>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `nav__links ${isActive ? "nav__links--active" : "nav__links"}`
                }
              >
                Add Pokemon
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
