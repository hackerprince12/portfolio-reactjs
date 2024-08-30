import React from "react";
import Navbar from "./Nav/Navbar";
import LandingPage from "./Landingpage.jsx/LandingPage";
import Footer from "./Footer";
import Contact from "./Contact";
import About from "../Components/About";
import CardPage from "../Components/Cards/CardPage";
import Googlemap from "../Components/Map/Googlemap";
import Projectpage from "../Components/Project/Projectpage";

const Home = () => {
  return (
    <>
      <div style={{ backgroundColor: "whitesmoke" }}>
        <Navbar />
        <LandingPage />
        <About />
        <Projectpage />
        <CardPage />
        <br></br>
        <Contact />
        <Googlemap />
        <Footer />
      </div>
    </>
  );
};

export default Home;
