
function HeaderTabs(props) {

    return (
      <div>
        <p onClick = {() => props.func('About')}>
          About
        </p>
        <p onClick = {() => props.func('Experience')}>
          Experience
        </p>
        <p onClick = {() => props.func('Education')}>
          Education
        </p>
        <p onClick = {() => props.func('SoftwareSkills')}>
          Software Skills
        </p>
        <p onClick = {() => props.func('TestScores')}>
          Test Scores
        </p>
      </div>
    );
  }
  
  export default HeaderTabs;
  