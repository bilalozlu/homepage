import './cv_section.css';
import React, { useState } from 'react';

function SoftwareSkills() {
  const [isHoverOn, setIsHoverOn] = useState(-1);
  const skillData = [
    {
      skillName: "JavaScript",
      description: ["2.5 years of expereince in industry", "Frontend of graduation project", "Developed 'bilalozlu.com'",
        "Mostly used with frameworks & libraries", "Using actively", "Following latest updates"]
    },
    {
      skillName: "React",
      description: ["2 years of expereince in industry", "Frontend of graduation project", "Developed 'bilalozlu.com'",
        "Used Redux", "Used hooks", "Developement with both class and functional components",
        "Following best practices", "Using actively", "Following latest updates"]
    },
    {
      skillName: "Java",
      description: ["asd"]
    },
    {
      skillName: "C / C++",
      description: ["asd"]
    },
    {
      skillName: "NodeJS",
      description: ["asd"]
    },
    {
      skillName: "VueJS",
      description: ["asd"]
    },
    {
      skillName: "React Native",
      description: ["asd"]
    },
    {
      skillName: "Python",
      description: ["asd"]
    },
    {
      skillName: "Haskell",
      description: ["asd"]
    },
    {
      skillName: "NoSQL",
      description: ["asd"]
    },
    {
      skillName: "MongoDB",
      description: ["asd"]
    },
    {
      skillName: "MySQL",
      description: ["asd"]
    }
  ]

  return (
    <div className="cv_section">
      <div>
        {skillData.map((data, index) =>
          <>
            <p className='title' onMouseEnter={() => {
              setIsHoverOn(index);
            }}
              onMouseLeave={() => {
                setIsHoverOn(-1);
              }}>
              {data.skillName}
            </p>
            {data.description.map(oneSkill =>
              <p className='text' style={isHoverOn === index ? { display: "block" } : { display: "none" }}>
                {'\u2022'} {oneSkill}
              </p>
            )}
          </>
        )}
      </div>
      <div className='photoArea'>
        <img alt='skills' src="skills.jpg" width="200px" className='photo' />
      </div>
    </div>
  );
}

export default SoftwareSkills;
