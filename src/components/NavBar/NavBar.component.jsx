import React from "react";
import { Link } from "react-router-dom";
import { FaCookieBite } from "react-icons/fa";
import Search from "./Search/Search.component";
import "./NavBar.style.scss";
import NavLinks from "./NavLinks/NavLinks.component";
export default function NavBar() {
  return (
    <header className="navbar">
      <div className="container navbar__container">
        <Link className="navbar__brand" to="/">
          <FaCookieBite className="navbar__brand-logo" />
          <span className="navbar__brand-name">Freecipes</span>
        </Link>

        <div className="navbar__search-section">
          <Search />
        </div>

        <NavLinks />
      </div>
    </header>
  );
}
