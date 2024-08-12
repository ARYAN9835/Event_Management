import React from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/Herosection";
import Services from "../Components/Services";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";


const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Services />
            <About />
            <Contact />
            <Footer />
            <Toaster />
        </div>
    );
};

export default Home