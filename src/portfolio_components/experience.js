import './portfolio_section.css';
import React, { useState } from 'react';

function Experience() {
  const [isHoverOn, setIsHoverOn] = useState(-1);
  const experienceData = [
    {
      companyName: "HAVELSAN",
      date: "02.2022 – ongoing",
      position: "Full-time Software Engineer",
      description: ["Developed a front-end application with ReactJS, runs on both desktop and browser, in order to modernize an old project ", "Worked with a team on a large Java & Spring project to fulfill the requirements for acceptance tests", "Managed software requirements on DOORS & JIRA"]
    },
    {
      companyName: "StartupHeroes",
      date: "10.2021 – 01.2022 (4 months)",
      position: "Full-time Software Engineer",
      description: ["Developed front-end application with VueJS", "Unit testing with Jest", "Used TypeScript with ReactJS"]
    },
    {
      companyName: "OBSS",
      date: "09.2020 – 09.2021 (1 year, 1 month)",
      position: "Full-time Software Engineer",
      description: ["Developed front-end application with ReactJS & Redux & Hooks", "Worked in a front-end team that applies scrum methodologies"]
    },
    {
      companyName: "Turna Teknoloji",
      date: "11.2019 – 06.2020 (7 months)",
      position: "Part-time Software Engineer",
      description: ["Developed mobile application with React Native & Redux", "Used NodeJS with Firebase", "Unit testing with Jest"]
    },
    {
      companyName: "FAME CRYPT",
      date: "09 – 11.2019 (3 months)",
      position: "Part-time Software Engineer",
      description: ["Implemented cryptographic algorithms with C++", "Developed desktop application with Qt (C++)", "Built company’s website with HTML/CSS"]
    },
    {
      companyName: "Korona Software Solutions",
      date: "06 – 09.2018 (4 months)",
      position: "Summer Intern",
      description: ["Developed mobile application with React Native"]
    },
    {
      companyName: "Piksel Bilişim",
      date: "08 – 09.2017 (2 months)",
      position: "Summer Intern",
      description: ["Developed a complete web application (PHP, Apache, MySQL, HTML/CSS)"]
    }
  ]

  return (
    <div className="portfolio_section">
      <div>
        {experienceData.map((data, index) =>
          <>
            <div className='title'
              onMouseEnter={() => {
                setIsHoverOn(index);
              }}
              onMouseLeave={() => {
                setIsHoverOn(-1);
              }}>
              <p className='titleText'>
                {data.companyName}
              </p>
              <p className='jobDetail'>
                {data.position} | {data.date}
              </p>
            </div>
            {data.description.map(oneJob =>
              <p className={`description ${isHoverOn === index ? 'show' : 'hide'}`}>
                {'\u2022'} {oneJob}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Experience;
