import { useState } from 'react';

function SoftwareSkills() {
  const [isHoverOn, setIsHoverOn] = useState(-1);
  const skillData = [
    {
      skillName: "JavaScript",
      description: ["5 years of experience in industry", "Frontend of graduation project", "Developed 'bilalozlu.com'",
        "Mostly used with frameworks & libraries", "Using actively", "Following latest updates"],
      logo: "./javascript_logo.png",
    },
    {
      skillName: "TypeScript",
      description: ["2 years of experience in industry", "Using actively", "Following latest updates"],
      logo: "./typescript_logo.svg",
    },
    {
      skillName: "ReactJS",
      description: ["4 years of experince in industry", "Frontend of graduation project", "Developed 'bilalozlu.com'",
        "Used redux", "Used hooks", "Developement with both class and functional components",
        "Following best practices", "Using actively", "Following latest updates"],
      logo: "./react_logo.png",
    },
    {
      skillName: "NextJS",
      description: ["2 years of experince in industry",
        "Used redux", "Used hooks", "Developement with both class and functional components",
        "Following best practices", "Using actively", "Following latest updates"],
      logo: "./nextjs_logo.svg",
    },
    {
      skillName: "NodeJS",
      description: ["2 months of experience in industry", "Developed several projects with express"],
      logo: "./nodejs_logo.png",
    },
    {
      skillName: "VueJS",
      description: ["2 months of experience in industry", "Unit testing with Jest"],
      logo: "./vue_logo.png",
    },
    {
      skillName: "React Native",
      description: ["1 year of experience in industry", "Used redux"],
      logo: "./reactnative_logo.svg",
    },
    {
      skillName: "Java",
      description: ["3 year of experience in industry", "Knowledge of OOP & Clean Code", "Familiar with development environment",
        "Familiar with design patterns"],
      logo: "./java_logo.png",
    },
    {
      skillName: "Python",
      description: ["No experience in industry", "Mostly used in college"],
      logo: "./python_logo.svg",
    },
    {
      skillName: "MongoDB",
      description: ["Limited experience in industry", "Used for several projects"],
      logo: "./mongodb_logo.svg",
    },
  ]

  return (
    <section className="skills" id="skills">
      <h2 className="head-title">Skills</h2>
      {skillData.map((data, index) =>
        <div>
          <div
            onMouseEnter={() => { setIsHoverOn(index) }}
            onMouseLeave={() => { setIsHoverOn(-1) }}
            className="skill-area" >
            <img src={data.logo} alt="skill_logo" className="logo" />
            <p className="skill-name">{data.skillName}</p>
          </div>
          {data.description.map(oneSkill =>
            <p className={`description ${isHoverOn === index ? 'show' : 'hide'}`}>
              {'\u2022'} {oneSkill}
            </p>
          )}
          <hr />
        </div>
      )}
    </section>
  );
}

export default SoftwareSkills;
