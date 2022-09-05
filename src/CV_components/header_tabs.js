import './header_tabs.css';

function HeaderTabs(props) {

  return (
    <div className='header_tabs'>
      <div className='name'>
        <p>Bilal Özlü</p>
      </div>
      <div className='tabs'>
        <button onClick = {() => props.func('About')} className={`headTab ${props.selected === 'About' ? 'selected' : ''}`}>
          About
        </button>
        <button onClick = {() => props.func('Experience')} className={`headTab ${props.selected === 'Experience' ? "selected" : ''}`}>
          Experience
        </button>
        <button onClick = {() => props.func('Education')} className={`headTab ${props.selected === 'Education' ? "selected" : ''}`}>
          Education
        </button>
        <button onClick = {() => props.func('SoftwareSkills')} className={`headTab ${props.selected === 'SoftwareSkills' ? "selected" : ''}`}>
          Software Skills
        </button>
        <button onClick = {() => props.func('TestScores')} className={`headTab ${props.selected === 'TestScores' ? "selected" : ''}`}>
          Test Scores
        </button>
      </div>
      <div className='mail'>
        <p>bilal.ozlu@outlook.com</p>
      </div>
    </div>
  );
}

export default HeaderTabs;
