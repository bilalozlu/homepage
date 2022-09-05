import './cv_section.css';

function About() {
  return (
    <div className="cv_section">
      <div>
        <p className='title'>
          Bilal Özlü
        </p>
        <p className='text'>
          A software engineer specialized on React & JS
        </p>
        <p className='text'>
          loves to code
        </p>
        <p className='text'>
          eager to learn
        </p>
        <p className='text'>
          excited to implement new ideas
        </p>
      </div>
      <div className='photo'>
        <img alt='profile' src="profile.jpg" />
      </div>
    </div>
  );
}

export default About;
