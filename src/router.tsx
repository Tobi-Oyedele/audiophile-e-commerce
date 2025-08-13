import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import Home from "./components/Home";
import Headphones from "./components/Headphones";
import Speakers from "./components/Speakers";
import Earphones from "./components/Earphones";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <Home /> },
  { path: "headphones", element: <Headphones /> },
  { path: "speakers", element: <Speakers /> },
  { path: "earphones", element: <Earphones /> },
]);
