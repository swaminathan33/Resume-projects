import React from "react";
import HeroSection from "../Components/HeroSection";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import CodeChallenge from "./CodeChallenge";

const Home = () => {
  return (
    <div id="home">
      <HeroSection />
      {/* <AboutMe />
      <Skills /> */}
      <Projects />
      <CodeChallenge />
    </div>
  );
};

export default Home;
