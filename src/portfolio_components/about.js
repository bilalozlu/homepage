import './portfolio_section.css';

function About() {
  return (
    <div className="portfolio_section">
      <div>
        <p className='title'>
          Bilal Özlü
        </p>
        <p className='description'>
          A software engineer specialized on React & JS
        </p>
        <p className='description'>
          loves to code
        </p>
        <p className='description'>
          eager to learn
        </p>
        <p className='description'>
          excited to implement new ideas
        </p>
      </div>
      <div className='photoArea'>
        <img alt='profile' src="profile.jpg"  width="200px" className='photo'/>
      </div>
    </div>
  );
}

export default About;
