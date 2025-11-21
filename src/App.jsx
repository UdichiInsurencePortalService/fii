import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./Components/pages/Home/Home";
import Navbar from "./Components/Header/Navbar/Navbar";
import Footer from "./Components/Header/Footer/Footer";
import Overview from "./Components/pages/About/Overview";
import Visionmission from "./Components/pages/About/visionmission";
import Objectives from "./Components/pages/About/Objectives";
import Governing from "./Components/pages/About/governing";
import Institutional from "./Components/pages/Members/Institutional";
import Applyform from "./Components/pages/Members/applyform";
import Skill from "./Components/pages/Activities/Skill";
import Research from "./Components/pages/Activities/Research";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/visionmission" element={<Visionmission />} />
        <Route path="/Objectives" element={<Objectives />} />
        <Route path="/Governing" element={<Governing />} />
        <Route path="/Institutional" element={<Institutional />} />
        <Route path="/apply" element={<Applyform />} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/Research" element={<Research />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
