import './cv_section.css';
import React, { useState } from 'react';

function Experience() {
  const [isHoverOn, setIsHoverOn] = useState(-1);
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
        {experienceData.map((data, index) =>
          <>
            <div className='jobHeader'>
              <p className='title' onMouseEnter={() => {
                setIsHoverOn(index);
              }}
                onMouseLeave={() => {
                  setIsHoverOn(-1);
                }}>
                {data.companyName}
              </p>
              <p className='text'>
                {data.position} --- {data.date}
              </p>
            </div>
            {data.description.map(oneJob =>
              <p className='text' style={isHoverOn === index ? { display: "block" } : { display: "none" }}>
                {'\u2022'} {oneJob}
              </p>
            )}
          </>
        )}
      </div>
      <div className='photoArea'>
        <img alt='experience' src="experience.jpg" width="200px" className='photo' />
      </div>
    </div>
  );
}

export default Experience;
