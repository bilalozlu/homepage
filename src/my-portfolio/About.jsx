function About() {

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById("experience");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="about" id="about">
      <div className='profile'>
        <img src="profile.jpg" alt="profile" width="180px" />
      </div>
      <h1>Bilal ÖZLÜ</h1>
      <p>Full-stack javascript engineer</p>
      <div className='links'>
        <a className="link" href="https://www.linkedin.com/in/bilalozlu/">
          <img src="linkedin_bw.png" alt="linkedin" width="40px" />
          <img src="linkedin.png" alt="linkedin" width="40px" />
        </a>
        <a className="link" href="https://github.com/bilalozlu/">
          <img src="github.png" alt="github" width="42px" />
          <img src="github.png" alt="github" width="42px" />
        </a>
        <a className="link" href="https://www.medium.com/@bilalozlu/">
          <img src="medium.png" alt="medium" width="41px" />
          <img src="medium.png" alt="medium" width="41px" />
        </a>
        <a className="link" href="https://www.hackerrank.com/bilalozlu/">
          <img src="hackerrank_bw.png" alt="hackerrank" width="40px" />
          <img src="hackerrank.png" alt="hackerrank" width="40px" />
        </a>
      </div>
      <button className="scroll-link" onClick={scrollToProjects}>Scroll Down ↓</button>
    </section>
  );
}

export default About;
