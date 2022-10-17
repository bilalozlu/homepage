import './portfolio_section.css';

function Education() {
  return (
    <div className="portfolio_section">
      <div>
        <p className='title'>
          ODTÜ - Computer Engineering
        </p>
        <p className='description'>
          2020
        </p>
      </div>
      <div className='photoArea'>
        <img alt='education' src="education.jpeg" width="200px" className='photo' />
      </div>
    </div>
  );
}

export default Education;
