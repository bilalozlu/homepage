import { useState, useEffect } from "react";

const titles = ["Full-Stack Software Engineer", "React & Node.js Developer"];

function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === titles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 2000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 25 : 50);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  useEffect(() => {
    setText(titles[index].substring(0, subIndex));
  }, [subIndex, index]);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById("experience");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className='profile'>
        <img src="profile.jpg" fetchpriority="high" alt="profile" width="180px" />
      </div>
      <h1>Bilal ÖZLÜ</h1>
      <p><span>{text}</span><span className="blinking-cursor">|</span></p>
      <div className='links'>
        <a className="link" href="https://www.linkedin.com/in/bilalozlu/">
          <img src="linkedin.png" alt="linkedin" width="40px" />
        </a>
        <a className="link" href="https://github.com/bilalozlu/">
          <img src="github.png" alt="github" width="45px" />
        </a>
        <a className="link" href="https://www.medium.com/@bilalozlu/">
          <img src="medium.png" alt="medium" width="42px" />
        </a>
        <a className="link" href="https://www.hackerrank.com/bilalozlu/">
          <img src="hackerrank.png" alt="hackerrank" width="40px" />
        </a>
      </div>
      <button className="scroll-link" onClick={scrollToProjects}>Scroll Down ▼</button>
    </section>
  );
}

export default Hero;
