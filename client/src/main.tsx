import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/fira-code";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="main-container">
      <App />
    </div>
  </React.StrictMode>
);
