import './header_tabs.css';

function HeaderTabs(props) {

  return (
    <div className='header_tabs'>
      <div className='title'>
        <p>Bilal Özlü</p>
      </div>
      <div className='tabs'>
        <button onClick = {() => props.func('About')} className={props.selected === 'About' ? 'selected' : ''}>
          About
        </button>
        <button onClick = {() => props.func('Experience')} className={props.selected === 'Experience' ? "selected" : ''}>
          Experience
        </button>
        <button onClick = {() => props.func('Education')} className={props.selected === 'Education' ? "selected" : ''}>
          Education
        </button>
        <button onClick = {() => props.func('SoftwareSkills')} className={props.selected === 'SoftwareSkills' ? "selected" : ''}>
          Software Skills
        </button>
        <button onClick = {() => props.func('TestScores')} className={props.selected === 'TestScores' ? "selected" : ''}>
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
