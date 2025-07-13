import { useState } from 'react';

const experienceData = [
  {
    companyName: "TÜBİTAK BİLGEM YTE",
    date: "05.2023 – ongoing",
    position: "Software Engineer",
    logo: "./yte_logo.svg",
    description: ["Developing a large-scaled web app(tax system of Türkiye) with NextJS, TypeScript on the front, Java at the back", "Managing a core front-end library where most components based on MUI"]
  },
  {
    companyName: "HAVELSAN",
    date: "02.2022 – 05.2023 (1 year, 4mo)",
    position: "Software Engineer",
    logo: "./havelsan_logo.svg",
    description: ["Developed a front-end application with ReactJS, runs on both desktop and browser, in order to modernize an old project ", "Worked with a team on a large Java & Spring project to fulfill the requirements for acceptance tests", "Managed software requirements on DOORS & JIRA"]
  },
  {
    companyName: "StartupHeroes",
    date: "10.2021 – 01.2022 (4 mo)",
    position: "Software Engineer",
    logo: "./startupheroes_logo.png",
    description: ["Developed front-end application with VueJS", "Unit testing with Jest", "Used TypeScript with ReactJS"]
  },
  {
    companyName: "OBSS",
    date: "09.2020 – 09.2021 (1 year, 1 mo)",
    position: "Software Engineer",
    logo: "./obss_logo.png",
    description: ["Developed front-end application with ReactJS & Redux & Hooks", "Worked in a front-end team that applies scrum methodologies"]
  },
  {
    companyName: "Turna Teknoloji",
    date: "11.2019 – 06.2020 (7 mo)",
    position: "Part-time Software Engineer",
    logo: "./turna_logo.png",
    description: ["Developed mobile application with React Native & Redux", "Used NodeJS with Firebase", "Unit testing with Jest"]
  },
  {
    companyName: "FAME CRYPT",
    date: "09 – 11.2019 (3 mo)",
    position: "Part-time Software Engineer",
    logo: "./famecrypt_logo.png",
    description: ["Implemented cryptographic algorithms with C++", "Developed desktop application with Qt (C++)", "Built company’s website with HTML/CSS"]
  }
]

function Experience() {
  const [isHoverOn, setIsHoverOn] = useState(-1);

  return (
    <section className="experience" id="experience">
      <h2 className="head-title">Work Experience</h2>
      {experienceData.map((data, index) =>
        <div>
          <div
            onMouseEnter={() => { setIsHoverOn(index) }}
            onMouseLeave={() => { setIsHoverOn(-1) }}
            className="job-area" >
            <img src={data.logo} alt="company_logo" className="logo" />
            <div>
              <p className="company-name">{data.companyName}</p>
              <p className="job-position">{data.position} | {data.date}</p>
            </div>
          </div>
          {data.description.map(oneJob =>
            <p className={`description ${isHoverOn === index ? 'show' : 'hide'}`}>
              {'\u2022'} {oneJob}
            </p>
          )}
          <hr />
        </div>
      )}
    </section>
  );
}

export default Experience;
