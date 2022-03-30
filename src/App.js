import React, {useLayoutEffect, useState, useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import ParticleBackground from "./components/ParticleBackground";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function App() {

  const [width] = useWindowSize();

  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div className="app">
     {width>=980 && <ParticleBackground />}
     <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/portfolio" element={ <Portfolio/> } />
        <Route path="/blog" element={ <Blog/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
    </div>
  );
}

export default App;

