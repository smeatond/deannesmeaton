import "./MobileNav.css";

function MobileNav() {
  return (
    <nav className="nav nav-mobile">
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

export default MobileNav;
