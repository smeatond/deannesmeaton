import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "@fontsource/fira-code";
import "@fontsource/roboto";
import App from "./App.tsx";
import "./index.css";
import ErrorPage from "./pages/ErrorPage.tsx";
import About from "./pages/About.tsx";
import Home from "./pages/Home.tsx";
//import Blog from "./pages/Blog.tsx";
import Privacy from "./pages/Privacy.tsx";
import UnderConstruction from "./pages/UnderConstruction.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App outlet={<ErrorPage />} />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <UnderConstruction />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
    ],
  },
]);

const rootElement = document.getElementById("app");

ReactDOM.hydrateRoot(
  rootElement as HTMLElement,
  <div className="main-container">
    <RouterProvider router={router} />
  </div>
);
