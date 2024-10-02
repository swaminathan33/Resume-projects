import React from "react";
import HeroSection from "../Components/HeroSection";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";

const Home = () => {
  return (
    <div id="home">
      <HeroSection />
      {/* <AboutMe />
      <Skills /> */}
      <Projects />
    </div>
  );
};

export default Home;
