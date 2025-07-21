import './styles/main.scss';
import ThemeToggle from "./theme-toggle/ThemeToggle";
import Hero from './my-portfolio/Hero.jsx';
import Experience from './my-portfolio/Experience.jsx';
import Education from './my-portfolio/Education.jsx';
import SoftwareSkills from './my-portfolio/Skills.jsx';
import Projects from './my-portfolio/Projects.jsx';
import Footer from './footer/Footer.jsx';

function App() {

  return (
    <div className='app'>
      <ThemeToggle />
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
