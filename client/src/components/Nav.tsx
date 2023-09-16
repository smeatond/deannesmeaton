import "./Nav.css";
import { Link } from "react-router-dom";

interface iNavProps {
  isMobile: boolean;
}
function Nav(props: iNavProps) {
  return (
    <nav className={props.isMobile ? "nav nav-mobile" : "nav"}>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"about"}>About</Link>
        </li>
        <li>
          <Link to={"blog"}>Blog</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
