import './styles/main.scss';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from './my-portfolio/Hero.jsx';
import Experience from './my-portfolio/Experience.jsx';
import Education from './my-portfolio/Education.jsx';
import SoftwareSkills from './my-portfolio/Skills.jsx';
import Projects from './my-portfolio/Projects.jsx';

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
        {darkMode ? "◐" : "◑"}
      </button>
      <Hero />
      <Experience />
      <Projects />
      <Education />
      <SoftwareSkills />
      <a href="BilalOzlu_resume.pdf">Resume</a>
      <hr/>
      <Link to={"./solutions"}>solutions </Link>
    </div>
  );
}

export default App;
