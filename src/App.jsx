import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/LandingPage/Hero";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Services from "./Components/Services/Services";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="h-max overflow-hidden">
        {/* Background Styling */}
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
        </div>

        {/* Page Content */}
        <div className="mx-auto max-w-[290px] sd:max-w-[370px] 540:max-w-[480px] sm:max-w-[540px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px]">
          <Routes>
            {/* Default Route */}
            <Route path="/" element={<Hero />} />
            {/* Redirect `/home` to `/` */}
            <Route path="/home" element={<Navigate to="/" />} />
            {/* Other Routes */}
            <Route path="/team" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            {/* Catch-All Route (Optional) */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
