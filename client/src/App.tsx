import siteLogo from "./assets/branding/ds-logo-lightmode-sml.svg";
import githubLogo from "./assets/logos/github-mark.png";
import linkedinLogo from "./assets/logos/li-in-logo.png";
import xLogo from "./assets/logos/x-logo.png";
import "./App.css";
import useWindowDimensions from "./helpers/WindowDimentions";
import Nav from "./components/Nav";
import { Link, Outlet } from "react-router-dom";

interface IApp {
  outlet?: any;
}

function App(props: IApp) {
  const { width } = useWindowDimensions();
  return (
    <>
      <header className="header">
        <Link to={"/"}>
          <img
            src={siteLogo}
            className="logo"
            alt="Deanne Smeaton"
            title="Deanne Smeaton"
          />
        </Link>
        <div className="header-section">
          <span className="title">Deanne Smeaton</span>
          <span className="sub-title">
            Full-stack Developer &#183; Educator
          </span>
          {width >= 600 && <Nav isMobile={false} />}
        </div>
        {width < 600 && <Nav isMobile={true} />}
      </header>
      <main className="main">{props.outlet ? props.outlet : <Outlet />}</main>
      <footer className="footer">
        <div className="footer-content">
          <Link to={"/privacy"}>Privacy</Link>
          <a href="mailto:deanne.smeaton@gmail.com">Email</a>
        </div>
        <div className="footer-socials">
          <span>Follow me:</span>{" "}
          <span>
            <a
              href="https://github.com/smeatond"
              title="Follow me on Github @smeatond"
            >
              <img
                src={githubLogo}
                className="logo-social github"
                alt="Follow me on Github @smeatond"
              />
              GitHub
            </a>
          </span>{" "}
          <span>
            <a
              href="https://www.linkedin.com/in/smeatond/"
              title="Follow me on LinkedIn"
            >
              <img
                src={linkedinLogo}
                className="logo-social linkedin"
                alt="Follow me on LinkedIn"
              />
              LinkedIn
            </a>
          </span>{" "}
          <span>
            <a
              href="https://twitter.com/deanne_smeaton"
              title="Follow me on X @deanne_smeaton"
            >
              <img
                src={xLogo}
                className="logo-social x"
                alt="Follow me on X @deanne_smeaton"
              />
              @deanne_smeaton
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
