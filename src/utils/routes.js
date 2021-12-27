import React from "react";
import Home from "../new/Home.js";
import Login from "../new/Login.js";
import Gallery from "../new/Gallery.js";

export default [
  {
    path: "/",
    exact: true,
    component: () => <Home />,
  },
  {
    path: "/gallery",
    component: () => <Gallery />,
  },
  {
    path: "/Login",
    component: () => <Login />,
  },
];
