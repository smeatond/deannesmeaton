import { useState } from "react";
import siteLogo from "/DeanneSmeatonLogo_LightMode_Small.svg";
import "./App.css";
import useWindowDimensions from "./helpers/WindowDimentions";
import MainNav from "./components/MainNav";
import MobileNav from "./components/MobileNav";

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
          {width >= 600 && <MainNav />}
        </div>
        {width < 600 && <MobileNav />}
      </header>
    </>
  );
}

export default App;
