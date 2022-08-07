import React from "react";
import Button from "../components/Button";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import AboutUs from "../components/aboutus/AboutUs";
import Form from "../components/form/Form";
import Images from "../components/images/Images";
import Navbar from "../components/navbar/Navbar";
import HatCount from "../components/HatCount";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <HatCount />

      <AboutUs />

      <Form />
      <Button
        id="quizbuttonhome"
        name="Try Our Quiz About Shaken Baby Syndrome."
        link="/quiz"
      />
      <Images />

      <Footer />
    </div>
  );
};

export default HomePage;
