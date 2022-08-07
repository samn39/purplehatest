import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Images from "../components/images/Images";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useOutletContext();

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const { username, password } = inputs;
  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { username, password };
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <Header />
      <Navbar />

      <div className="wrapper loginform">
        <form
          className="w3-container w3-card-4 forminput"
          onSubmit={onSubmitForm}
        >
          <h2 className="formCol">Admin Log In</h2>
          <p>
            <label className="formCol">
              <b>Username</b>
            </label>
            <input
              className="w3-input w3-border"
              name="username"
              type="text"
              value={username}
              onChange={(e) => onChange(e)}
              required
            />
          </p>
          <p>
            <label className="formCol">
              <b>Password</b>
            </label>
            <input
              className="w3-input w3-border"
              name="password"
              type="password"
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
          </p>
          <p>
            <button className="formColB">Log In</button>
          </p>
        </form>
      </div>

      <Images />

      <Footer />
    </div>
  );
};

export default Admin;
