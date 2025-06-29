import './styles/main.scss';
import { Link } from "react-router-dom";
import About from './my-portfolio/About.jsx';
import Experience from './my-portfolio/Experience.jsx';
import Education from './my-portfolio/Education.jsx';
import SoftwareSkills from './my-portfolio/Skills.jsx';
import Projects from './my-portfolio/Projects.jsx';

function App() {
  return (
    <div className='app'>
      <About />
      <Experience />
      <Projects />
      <Experience />
      <Education />
      <SoftwareSkills />
      <a href="BilalOzlu_resume.pdf">Resume</a>
      <hr/>
      <Link to={"./solutions"}>solutions </Link>
    </div>
  );
}

export default App;
