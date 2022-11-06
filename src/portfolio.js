import React, { useEffect, useState } from 'react';
import './portfolio.css';
import SideBar from './portfolio_components/side_bar.js';
import About from './portfolio_components/about.js';
import Experience from './portfolio_components/experience';
import Education from './portfolio_components/education';
import SoftwareSkills from './portfolio_components/software_skills';
import Contacts from './portfolio_components/contacts.js';


function Portfolio() {
  const [selectedTab, setSelectedTab] = useState('About');

  const handleScroll = () => {
      const position = window.pageYOffset;
      if(position < window.innerHeight){
        setSelectedTab('About');
      }
      else if (position < window.innerHeight*2) {
        setSelectedTab('Experience');
      }
      else if (position < window.innerHeight*3) {
        setSelectedTab('SoftwareSkills');
      }
      else {
        setSelectedTab('Education');
      }
  };
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  function handleSelect(chosen) {
    let verticalDistance;
    switch (chosen) {
      case 'About':
        verticalDistance = 0;
        break;
      case 'Experience':
        verticalDistance = 1;
        break;
      case 'SoftwareSkills':
        verticalDistance = 2;
        break;
      case 'Education':
        verticalDistance = 3;
        break;
      default:
        verticalDistance = 0;
        break;
    }
    window.scrollTo({
      top: window.innerHeight*verticalDistance,
      behavior: "smooth",
    });
  };

  return (
    <div className='portfolio'>
      <SideBar func={handleSelect} selected={selectedTab} />
      <div>
        <About />
        <Experience />
        <SoftwareSkills />
        <Education />
      </div>
      <Contacts />
    </div>
  );
}

export default Portfolio;
