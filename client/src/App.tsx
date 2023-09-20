import siteLogo from "./assets/branding/ds-logo-lightmode-sml.svg";
import githubLogo from "./assets/logos/github-mark.png";
import linkedinLogo from "./assets/logos/li-in-logo.png";
import xLogo from "./assets/logos/x-logo.png";
import "./App.css";
import useWindowDimensions from "./helpers/WindowDimentions";
import Nav from "./components/Nav";
import { Link, Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import websiteDetails from "./config/website-details.json";

interface IApp {
  outlet?: any;
}

function App(props: IApp) {
  const { width } = useWindowDimensions();
  const subTitle: React.ReactNode = (
    <>
      <span className="sub-title">Full-stack Developer &#183; Educator</span>
    </>
  );
  const mobileWidth: number = 760;
  return (
    <>
      <HelmetProvider>
        <header className="header">
          <Link to={"/"} className="logo-link">
            <img
              src={siteLogo}
              className="logo"
              alt="Deanne Smeaton"
              title="Deanne Smeaton"
            />
          </Link>
          <div className="header-section">
            <span className="title">Deanne Smeaton</span>
            {width >= mobileWidth && (
              <>
                {subTitle}
                <Nav isMobile={false} />
              </>
            )}
          </div>
          {width < mobileWidth && (
            <>
              {subTitle}
              <Nav isMobile={true} />
            </>
          )}
        </header>
        <main className="main">{props.outlet ? props.outlet : <Outlet />}</main>
        <footer className="footer">
          <div className="footer-content">
            <Link to={"/privacy"}>Privacy</Link>
            <a href={`mailto:${websiteDetails.email}`}>Email</a>
          </div>
          <div className="footer-socials">
            <span>Follow me:</span>{" "}
            <span>
              <a
                href={websiteDetails.gitHub.gitHubUrl}
                title="Follow me on Github @smeatond"
              >
                <img
                  src={githubLogo}
                  className="logo-social github"
                  alt={`Follow me on Github ${websiteDetails.gitHub.gitHubHandle}`}
                />
                GitHub
              </a>
            </span>{" "}
            <span>
              <a
                href={websiteDetails.linkedInUrl}
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
                href={websiteDetails.twiiter.twiiterUrl}
                title={`Follow me on X ${websiteDetails.twiiter.twitterHandle}`}
              >
                <img
                  src={xLogo}
                  className="logo-social x"
                  alt={`Follow me on X ${websiteDetails.twiiter.twitterHandle}`}
                />
                {websiteDetails.twiiter.twitterHandle}
              </a>
            </span>
          </div>
        </footer>
      </HelmetProvider>
    </>
  );
}

export default App;
