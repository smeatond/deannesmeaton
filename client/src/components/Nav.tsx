import "./Nav.css";
interface iNavProps {
  isMobile: boolean;
}
function Nav(props: iNavProps) {
  return (
    <nav className={props.isMobile ? "nav nav-mobile" : "nav"}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
