import './side_bar.css';

function SideBar(props) {

  return (
    <div className='side_bar'>
      <div className='name'>
        <img src="profile.jpeg" alt="profile" width="100px" />
      </div>
      <div className='tabs'>
        <button onClick={() => props.func('About')} className={`headTab ${props.selected === 'About' && 'selected'}`}>
          About
        </button>
        <button onClick={() => props.func('Experience')} className={`headTab ${props.selected === 'Experience' && 'selected'}`}>
          Experience
        </button>
        <button onClick={() => props.func('SoftwareSkills')} className={`headTab ${props.selected === 'SoftwareSkills' && 'selected'}`}>
          Software Skills
        </button>
        <button onClick={() => props.func('Education')} className={`headTab ${props.selected === 'Education' && 'selected'}`}>
          Education
        </button>
      </div>
      <div className='mail'>
        <p>{'\u2709'} bilal.ozlu@outlook.com</p>
      </div>
    </div>
  );
}

export default SideBar;
