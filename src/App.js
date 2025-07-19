import './styles/main.scss';
import { useState, useEffect } from "react";
import Hero from './my-portfolio/Hero.jsx';
import Experience from './my-portfolio/Experience.jsx';
import Education from './my-portfolio/Education.jsx';
import SoftwareSkills from './my-portfolio/Skills.jsx';
import Projects from './my-portfolio/Projects.jsx';
import Footer from './footer/Footer.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme === "dark";
      const hour = new Date().getHours();
      return hour >= 18 || hour <= 6;
    }
    return false;
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className='app'>
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {"◐"}
      </button>
      <Hero />
      <Experience />
      <Education />
      <SoftwareSkills />
      <Projects />
      <hr/>
      <Footer />
    </div>
  );
}

export default App;
