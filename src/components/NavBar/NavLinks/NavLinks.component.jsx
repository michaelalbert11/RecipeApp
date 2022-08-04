import { NavLink } from "react-router-dom";
import "./NavLinks.style.scss";

import { FaPlusCircle, FaBookmark, FaUser } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
export default function NavLinks() {
  return (
    <nav className="navbar__navigation">
      <ul className="navbar__navigation-links">
        <NavLink to={"/"}>
          <li>
            <AiFillHome className="navbar__navigation-link__logo" />
          </li>
        </NavLink>
        <NavLink to={"/add-recipe"}>
          <li className="navbar__navigation-link">
            <FaPlusCircle className="navbar__navigation-link__logo" />
            <span className="navbar__navigation-link__name">add recipe</span>
          </li>
        </NavLink>
        <NavLink to={"/saved"}>
          <li className="navbar__navigation-link">
            <FaBookmark className="navbar__navigation-link__logo" />
            <span className="navbar__navigation-link__name">saved recipes</span>
          </li>
        </NavLink>
        <NavLink to={"/login"}>
          <li className="navbar__navigation-link">
            <FaUser className="navbar__navigation-link__logo" />
            <span className="navbar__navigation-link__name">login</span>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}
