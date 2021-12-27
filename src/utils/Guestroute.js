import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AppContext from "../store/Appcontext";

export default function Guestroutes(props) {
  const [isloggedin] = useContext(AppContext);

  if (!isloggedin) return <Route {...props} />;

  return <Redirect to="/" />;
}
