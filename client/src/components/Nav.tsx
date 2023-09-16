import "./Nav.css";
import { NavLink } from "react-router-dom";

interface iNavProps {
  isMobile: boolean;
}
function Nav(props: iNavProps) {
  return (
    <nav className={props.isMobile ? "nav nav-mobile" : "nav"}>
      <ul>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"about"}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"blog"}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
