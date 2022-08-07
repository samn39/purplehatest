import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import HatCount from "../components/HatCount";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Button from "../components/Button";
import { useOutletContext, useNavigate } from "react-router-dom";

const ChangeCount = () => {
  const [inputs, setInputs] = useState({
    hatcount: "",
  });
  const { hatcount } = inputs;
  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { hatcount };
      const response = await fetch("http://localhost:3001/count", {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      alert("Hat count updated");
    } catch (err) {
      console.error(err.message);
    }
  };

  const [isAuthenticated, setIsAuthenticated] = useOutletContext();
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/admin");
  };

  return (
    <div>
      <Header />
      <Navbar />

      <Button name="<3 Back To Main Page <3" link="/adminpage" />
      <div style={{ textAlign: "center" }}>
        <button className="logoutButton" onClick={(e) => logout(e)}>
          LOG OUT
        </button>
      </div>

      <div className="wrapper loginform">
        <form
          className="w3-container w3-card-4 forminput"
          onSubmit={onSubmitForm}
        >
          <h2 className="formCol">Hat Number Update</h2>
          <p>
            <label className="formCol">
              <b>Hat Count</b>
            </label>
            <input
              className="w3-input w3-border"
              name="hatcount"
              type="text"
              value={hatcount}
              onChange={(e) => onChange(e)}
              required
            />
          </p>

          <p>
            <button className="formColB">Update</button>
          </p>
        </form>
      </div>

      <h2 className="thank">Current Count:</h2>

      <HatCount />
      <Footer />
    </div>
  );
};

export default ChangeCount;
