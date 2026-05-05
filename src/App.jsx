import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./Components/pages/Home/Home";
import Navbar from "./Components/Header/Navbar/Navbar";
import Footer from "./Components/Header/Footer/Footer";
import Overview from "./Components/pages/About/Overview";
import Visionmission from "./Components/pages/About/Visionmission";
import Objectives from "./Components/pages/About/Objectives";
import Governing from "./Components/pages/About/Governing";
import Institutional from "./Components/pages/Members/Institutional";
import Applyform from "./Components/pages/Members/Applyform";
import Skill from "./Components/pages/Activities/Skill";
import Research from "./Components/pages/Activities/Research";
import Upcomingevents from "./Components/pages/Events-News/Upcomingevents";
import Pressreleases from "./Components/pages/Events-News/Pressreleases";
import Contact from "./Components/pages/Contactus/Contact";
import Gallery from "./Components/pages/Gallery/Gallery";
import Newsactivity from "./Components/pages/Events-News/Newsactivity";
import Dailynews from "./Components/pages/Fii-News/Dailynews";
import Industry from "./Components/pages/Members/Industry/Industry";
import Individual from "./Components/pages/Members/Individual/Individual"
import ScrollToTopButton from "./Components/pages/ScrollToTopButton/ScrollToTopButton";
import Workshops from "./Components/pages/Activities/Workshops/Workshops";


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
        <Route path="/apply" element={<Applyform />} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/Research" element={<Research />} />
        <Route path="/Upcomingevents" element={<Upcomingevents />} />
        <Route path="/Pressreleases" element={<Pressreleases />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Newsactivity" element={<Newsactivity />} />
        <Route path="/DailyNews" element={<Dailynews />} />
        <Route path="/Institutional" element={<Institutional />} />
        <Route path="/Industry" element={<Industry />} />
        <Route path="/Individual" element={<Individual />} />

        <Route path="/Workshops" element={<Workshops />} />

        {/* <Route path="/Institutional" element={<Institutional />} /> */}
      </Routes>

      <Footer />

      <ScrollToTopButton />
    </>
  );
}

export default App;
