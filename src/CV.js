import React, { useState } from 'react';
import './CV.css';
import HeaderTabs from './CV_components/header_tabs.js';
import About from './CV_components/about.js';
import Experience from './CV_components/experience';
import Education from './CV_components/education';
import SoftwareSkills from './CV_components/software_skills';
import Contacts from './CV_components/contacts.js';


function CV() {
  const [selectedTab, setSelectedTab] = useState('About');

  function handleSelect(chosen) {
    setSelectedTab(chosen);
  };

  return (
    <div className='cv'>
      <HeaderTabs func={handleSelect} selected={selectedTab} />
      {
        {
          'About': <About />,
          'Experience': <Experience />,
          'Education': <Education />,
          'SoftwareSkills': <SoftwareSkills />,
        }[selectedTab]
      }
      <Contacts />
    </div>
  );
}

export default CV;
