import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Shop from "./Pages/Shop.jsx";
import Missions from "./Pages/Missions.jsx";
import Careers from "./Pages/Careers.jsx";
import Contact from "./Pages/Contact.jsx";
import MainLayout from "./MainLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, element: <Home /> },
      { path: "/about-us", element: <About /> },
      { path: "/mission-phoenix", element: <Missions /> },
      { path: "/shop", element: <Shop /> },
      { path: "/careers", element: <Careers /> },
      { path: "/contact-us", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
