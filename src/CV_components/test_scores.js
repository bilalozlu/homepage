import './cv_section.css';

function TestScores() {
    return (
      <div className="cv_section">
      <div>
        <p className='title'>
          YDS 
        </p>
        <p className='text'>
          92.5/100
        </p>
        <p className='text'>
          English Language Exam focused on reading
        </p>
        <p className='title'>
          ALES 
        </p>
        <p className='text'>
          96.06/100
        </p>
        <p className='text'>
          Academic Education Entrance Exam requires basic math skills and understanding complex paragraphs
        </p>
      </div>
      <div className='photoArea'>
        <img alt='scores' src="scores.jpg" width="200px" className='photo'/>
      </div>
    </div>
    );
  }
  
  export default TestScores;
  