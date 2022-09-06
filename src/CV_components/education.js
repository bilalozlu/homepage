import './cv_section.css';

function Education() {
  return (
    <div className="cv_section">
      <div>
        <p className='title'>
          ODTÜ - Computer Engineering
        </p>
        <p className='text'>
          2020
        </p>
        <p className='text'>
          2.53
        </p>
      </div>
      <div className='photo'>
        <img alt='education' src="education.jpeg" />
      </div>
    </div>
  );
}

export default Education;
