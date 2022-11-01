import './side_bar.css';

function SideBar(props) {

  return (
    <div className='side_bar'>
      <div className='profile'>
        <img src="profile.jpeg" alt="profile" width="100px" />
      </div>
      <div className='tabs'>
        <button onClick={() => props.func('About')} className={`sideTab ${props.selected === 'About' && 'selected'}`}>
          About
        </button>
        <button onClick={() => props.func('Experience')} className={`sideTab ${props.selected === 'Experience' && 'selected'}`}>
          Experience
        </button>
        <button onClick={() => props.func('SoftwareSkills')} className={`sideTab ${props.selected === 'SoftwareSkills' && 'selected'}`}>
          Software Skills
        </button>
        <button onClick={() => props.func('Education')} className={`sideTab ${props.selected === 'Education' && 'selected'}`}>
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
