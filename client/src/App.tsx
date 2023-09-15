import { useState } from "react";
import siteLogo from "/DeanneSmeatonLogo_LightMode_Small.svg";
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
    </>
  );
}

export default App;
