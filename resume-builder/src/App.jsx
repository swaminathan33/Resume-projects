import React from "react";
import DefaultTemp from "./Templates/DefaultTemp";
import PersonalDetails from "./Pages/PersonalDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experience from "./Pages/Experience";
import Skills from "./Pages/Skills";
import Home from "./Pages/Home";
import Temp from "./Templates/Temp";
import Education from "./Pages/Education";
import Languages from "./Pages/Languages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal" element={<PersonalDetails />} />
        <Route path="/template" element={<DefaultTemp />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/Language" element={<Languages />} />
        <Route path="/temp" element={<Temp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
