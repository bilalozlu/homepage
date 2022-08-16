import './cv_section.css';

function About() {
  return (
    <div className="cv_section">
      <div>
        <p className='title'>
          Bilal Özlü
        </p>
        <p className='text'>
          A software engineer loves to code, develop and be beneficial, especially in front-end
        </p>
      </div>
      <div className='photo'>
        <img alt='profile' src="profile.jpg" />
      </div>
    </div>
  );
}

export default About;
