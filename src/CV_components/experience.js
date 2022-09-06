import './cv_section.css';
import React, { useState } from 'react';

function Experience() {
  const [hiddenStyle, setHiddenStyle] = useState({ display: 'none', color: 'white' });
  const experienceData = [
    {
      companyName: "HAVELSAN",
      date: "02.2022 – ongoing",
      position: "Full-time Software Engineer",
      description: ["Maintaining large Java project (debugging and analysis)", "Developing front-end application with ReactJS"]
    },
    {
      companyName: "StartupHeroes",
      date: "10.2021 – 01.2022 (4 months)",
      position: "Full-time Software Engineer",
      description: ["Developing front-end application with VueJS & ReactJS"]
    },
    {
      companyName: "OBSS",
      date: "09.2020 – 09.2021 (1 year, 1 month)",
      position: "Full-time Software Engineer",
      description: ["Developing front-end application with ReactJS & Redux & Hooks"]
    },
    {
      companyName: "Turna Teknoloji",
      date: "11.2019 – 06.2020 (7 months)",
      position: "Part-time Software Engineer",
      description: ["Developing mobile application with React Native & Redux"]
    },
    {
      companyName: "FAME CRYPT",
      date: "09 – 11.2019 (3 months)",
      position: "Part-time Software Engineer",
      description: ["Implementing cryptographic algorithms with C++", "Company website with HTML/CSS"]
    },
    {
      companyName: "Korona Software Solutions",
      date: "06 – 09.2018 (4 months)",
      position: "(Summer Intern",
      description: ["Developing mobile application with React Native"]
    },
    {
      companyName: "Piksel Bilişim",
      date: "08 – 09.2017 (2 months)",
      position: "(Summer Intern",
      description: [" Developing web application (PHP, Apache, MySQL, HTML/CSS)"]
    }
  ]
  return (
    <div className="cv_section">
      <div>
        {experienceData.map(data =>
          <>
            <p className='title'>
              {data.companyName}
            </p>
            {data.description.map(oneTask =>
              <p className='text'>
                {oneTask}
              </p>
            )}
          </>
        )}
        <p className='title' onMouseEnter={e => {
          setHiddenStyle({ display: 'block', color: 'white' });
        }}
          onMouseLeave={e => {
            setHiddenStyle({ display: 'none', color: 'white' })
          }}>
          HAVELSAN
        </p>
        <p style={hiddenStyle}>
          02.2022 – ongoing
        </p>
        <p className='text'>
          Maintaining large Java project (debugging and analysis)
        </p>
        <p className='text'>
          Developing front-end application with ReactJS
        </p>
      </div>
      <div className='photoArea'>
        <img alt='experience' src="experience.jpg" width="200px" className='photo' />
      </div>
    </div>
  );
}

export default Experience;
