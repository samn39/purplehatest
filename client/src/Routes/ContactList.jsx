import React, { useEffect, useState } from "react";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Button from "../components/Button";
import { useOutletContext, useNavigate } from "react-router-dom";

const ContactList = () => {
  const [contact, setContact] = useState([]);

  const deleteContact = async (id) => {
    try {
      const deleteContact = await fetch(`/contact/${id}`, {
        method: "DELETE",
      });

      setContact(contact.filter((info) => info.user_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getContact = async () => {
    try {
      const response = await fetch("/contact");
      const jsonData = await response.json();

      setContact(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getContact();
  }, []);

  // const [isAuthenticated, setIsAuthenticated] = useOutletContext();
  // setIsAuthenticated(false);

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
      {/* <button onClick={() => setIsAuthenticated(false)}> click</button> */}

      <div className="contactlist">
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Delete</th>
          </tr>
          {contact.map((info) => (
            <tr key={info.user_id}>
              <td>{info.name}</td>
              <td>{info.email}</td>
              <td>{info.phone}</td>
              <td>
                <button
                  className="delete"
                  onClick={() => deleteContact(info.user_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default ContactList;
