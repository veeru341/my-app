import React from "react";
import Home from "./Home";
import Cart from "./Cart"

export default [
    {
      path: "/",
      exact: true,
      component: () => <Home />,
    },
    {
      path: "/cart",
      component: () => <Cart />,
    }
] 