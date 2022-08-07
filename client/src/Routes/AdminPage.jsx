import React from "react";
import Button from "../components/Button";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Images from "../components/images/Images";
import { useOutletContext, useNavigate } from "react-router-dom";

const AdminPage = () => {
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

      <h2> Welcome!</h2>

      <Button name="<3 Check contact information <3" link="/contactlist" />
      <Button name="<3 Update hat count <3" link="/updatecount" />

      <div style={{ textAlign: "center" }}>
        <button className="logoutButton" onClick={(e) => logout(e)}>
          LOG OUT
        </button>
      </div>

      <Images />

      <Footer />
    </div>
  );
};

export default AdminPage;
