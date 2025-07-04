import React, { useState } from 'react';

function SoftwareSkills() {
  const [isHoverOn, setIsHoverOn] = useState(-1);
  const skillData = [
    {
      skillName: "JavaScript",
      description: ["5 years of experience in industry", "Frontend of graduation project", "Developed 'bilalozlu.com'",
        "Mostly used with frameworks & libraries", "Using actively", "Following latest updates"]
    },
    {
      skillName: "React",
      description: ["4 years of experince in industry", "Frontend of graduation project", "Developed 'bilalozlu.com'",
        "Used redux", "Used hooks", "Developement with both class and functional components",
        "Following best practices", "Using actively", "Following latest updates"]
    },
    {
      skillName: "Java",
      description: ["2 year of experience in industry", "Knowledge of OOP & Clean Code", "Familiar with development environment",
        "Familiar with design patterns"]
    },
    {
      skillName: "C / C++",
      description: ["3 months of experience in industry", "Main languages used in college courses", "Using actively C++ for algortihm challenges & competitive programming"]
    },
    {
      skillName: "NodeJS",
      description: ["2 months of experience in industry", "Developed several small projects with express"]
    },
    {
      skillName: "VueJS",
      description: ["2 months of experience in industry", "Unit testing with Jest"]
    },
    {
      skillName: "React Native",
      description: ["1 year of experience in industry", "Used redux"]
    },
    {
      skillName: "Python",
      description: ["No experience in industry", "Mostly used in college"]
    },
    {
      skillName: "NoSQL",
      description: ["No experience in industry", "Used for several small projects"]
    },
    {
      skillName: "MySQL",
      description: ["2 months of experience in industry", "Mostly used in college"]
    }
  ]

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div>
        {skillData.map((data, index) =>
          <div>
            <div
              onMouseEnter={() => {
                setIsHoverOn(index);
              }}
              onMouseLeave={() => {
                setIsHoverOn(-1);
              }}>
              <p>
                {data.skillName}
              </p>
            </div>
            {data.description.map(oneSkill =>
              <p className={`description ${isHoverOn === index ? 'show' : 'hide'}`}>
                {'\u2022'} {oneSkill}
              </p>
            )}
            <hr/>
          </div>
        )}
      </div>
    </section>
  );
}

export default SoftwareSkills;
