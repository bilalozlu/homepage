
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
      <h1>Hi, I’m Bilal Özlü</h1>
      <p>Full-stack javascript engineer</p>
      <a className="scroll-link" onClick={scrollToProjects}>Scroll Down ↓</a>
    </section>
  );
}

export default About;
