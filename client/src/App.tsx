import { useState } from "react";
import siteLogo from "/branding/ds-logo-lightmode-sml.svg";
import githubLogo from "/logos/github-mark.png";
import linkedinLogo from "/logos/li-in-logo.png";
import xLogo from "/logos/x-logo.png";
import "./App.css";
import useWindowDimensions from "./helpers/WindowDimentions";
import Nav from "./components/Nav";

function App() {
  const { height, width } = useWindowDimensions();
  console.log(height);
  console.log(width);
  return (
    <>
      <header className="header">
        <img src={siteLogo} className="logo" alt="Deanne Smeaton" />{" "}
        <div className="header-section">
          <span className="title">Deanne Smeaton</span>
          <span className="sub-title">Full-stack Developer &#183; Trainer</span>
          {width >= 600 && <Nav isMobile={false} />}
        </div>
        {width < 600 && <Nav isMobile={true} />}
      </header>
      <main></main>
      <footer className="footer">
        <div>
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
