import React, { useState } from "react";
import firebase from "../config/firebase";
import "./style1.css";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });
  //const [isloggedin, setIsloggedin] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    if (isloading) return;
    setIsloading(true);
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        history.replace("/");
        //setIsloggedin(true);
        setError("");
        setIsloading(false);
      })
      .catch((e) => {
        setError(e.message);
        console.log(e);
        setIsloading(false);
      });
  }

  function handleinput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  //if (isloggedin) return <Redirect to="/" />;

  return (
    <section>
      <div className="login">
        {error != "" && <p className="hai">{error}</p>}
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            name="email"
            onChange={handleinput}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            name="password"
            onChange={handleinput}
          />
          <br />
          <button type="submit">{isloading ? "Loading" : "Login"}</button>
        </form>
      </div>
    </section>
  );
}


export const store = createContext();
  const [data, setData] = useState([]);
  <store.Provider value={data, setData}></store.Provider>
  </store.Provider>