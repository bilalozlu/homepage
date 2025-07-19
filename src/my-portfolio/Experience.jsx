import { useState } from 'react';

const experienceData = [
  {
    companyName: "TÜBİTAK BİLGEM YTE",
    date: "05.2023 – ongoing",
    position: "Software Engineer",
    logo: "./yte_logo.svg",
    description: ["Developing a large-scale web application (e-Beyan: Türkiye’s national tax system) using Next.js and TypeScript (Java backend)", "Building and managing a shared front-end library used across multiple teams, primarily based on MUI"]
  },
  {
    companyName: "HAVELSAN",
    date: "02.2022 – 05.2023 (1 year, 4mo)",
    position: "Software Engineer",
    logo: "./havelsan_logo.svg",
    description: ["Modernized a legacy system by building a cross-platform ReactJS frontend (desktop & browser)", "Worked on a large-scale Java & Spring defense project to meet acceptance test requirements", "Managed software requirements using DOORS and JIRA"]
  },
  {
    companyName: "StartupHeroes",
    date: "10.2021 – 01.2022 (4 mo)",
    position: "Software Engineer",
    logo: "./startupheroes_logo.png",
    description: ["Contributed to the development of a large-scale e-commerce app (Trendyol) using VueJS", "React (TypeScript) frontend, tested with Jest"]
  },
  {
    companyName: "OBSS",
    date: "09.2020 – 09.2021 (1 year, 1 mo)",
    position: "Software Engineer",
    logo: "./obss_logo.png",
    description: ["Developed an interactive map-based frontend using React (Redux, Hooks) as part of a Scrum-based team for a defense project (ASELSAN SIPER)"]
  },
  {
    companyName: "Turna Teknoloji",
    date: "11.2019 – 06.2020 (7 mo)",
    position: "Part-time Software Engineer",
    logo: "./turna_logo.png",
    description: ["Mobile app with React Native (Class components, Redux, Jest)", "Node.js + Firebase backend"]
  },
  {
    companyName: "FAME CRYPT",
    date: "09 – 11.2019 (3 mo)",
    position: "Part-time Software Engineer",
    logo: "./famecrypt_logo.png",
    description: ["Cryptography & desktop app in C++ (Qt)", "Static website development (HTML/CSS)"]
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
          <div className={`description-area ${isHoverOn === index ? 'show' : 'hide'}`}>
            {data.description.map(oneJob =>
              <p>
                {'\u2022'} {oneJob}
              </p>
            )}
          </div>
          <hr />
        </div>
      )}
    </section>
  );
}

export default Experience;
