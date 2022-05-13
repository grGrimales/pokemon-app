import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
// import logo from "../../images/Copia de logo-tiempo-libro.png";

export const NavBar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const [categories, setCategories] = useState([]);

  const handleClick = () => setClick(!click);

  const handleClickDropdown = () => setDropdown(!dropdown);

  // useEffect(() => {
  //   getCategories().then((result) => {
  //     setCategories(result);
  //   });
  // }, []);

  return (
    <>
      <header className="header">
        <NavLink to="/" className="header__link">
          POKEMON - APP
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
                Inicio
              </NavLink>
            </li>

            <li className="nav__item" onClick={handleClickDropdown}>
              {/*  */}
              Pokedex
            </li>

            <li className="nav__item"></li>
          </ul>
        </nav>
      </header>
    </>
  );
};
