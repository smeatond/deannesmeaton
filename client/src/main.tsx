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
import Blog from "./pages/Blog.tsx";

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
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="main-container">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
