import './styles/main.scss';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import About from './my-portfolio/About.jsx';
import Experience from './my-portfolio/Experience.jsx';
import Education from './my-portfolio/Education.jsx';
import SoftwareSkills from './my-portfolio/Skills.jsx';
import Projects from './my-portfolio/Projects.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className='app'>
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "◐" : "◑"}
      </button>
      <About />
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
