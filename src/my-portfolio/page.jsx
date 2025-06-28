import './styles/main.scss';
import About from './components/about.jsx';
import Experience from './components/experience.jsx';
import Education from './components/education.jsx';
import SoftwareSkills from './components/skills.jsx';
import Projects from './components/projects.jsx';
import Contacts from './components/contacts.jsx';

function Portfolio() {

  return (
    <div className='portfolio'>
      <About />
      <Experience />
      <Projects />
      <Experience />
      <Education />
      <SoftwareSkills />
      <Contacts />
    </div>
  );
}

export default Portfolio;
