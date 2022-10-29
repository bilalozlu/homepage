import React, { useState } from 'react';
import './portfolio.css';
import SideBar from './portfolio_components/side_bar.js';
import About from './portfolio_components/about.js';
import Experience from './portfolio_components/experience';
import Education from './portfolio_components/education';
import SoftwareSkills from './portfolio_components/software_skills';
import Contacts from './portfolio_components/contacts.js';


function Portfolio() {
  const [selectedTab, setSelectedTab] = useState('About');

  function handleSelect(chosen) {
    setSelectedTab(chosen);
  };

  return (
    <div className='portfolio'>
      <SideBar func={handleSelect} selected={selectedTab} />
      {
        {
          'About': <About />,
          'Experience': <Experience />,
          'SoftwareSkills': <SoftwareSkills />,
          'Education': <Education />
        }[selectedTab]
      }
      <Contacts />
    </div>
  );
}

export default Portfolio;
