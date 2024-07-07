import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TextParallaxContentExample from "./components/TextParallaxContent";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutTheBusiness from "./components/AboutTheBusiness";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VisionAndValues from "./components/VisionAndValues";
import GalleryPage from "./components/Gallerypage";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero />
                        <VisionAndValues />
                        <AboutTheBusiness />
                        <div style={{ paddingTop: '80px' }}>
                            <TextParallaxContentExample />
                        </div>
                        <Contact />
                    </>
                } />
                <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
