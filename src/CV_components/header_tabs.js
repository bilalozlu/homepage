import './header_tabs.css';

function HeaderTabs(props) {

  return (
    <div className='header_tabs'>
      <div className={`name ${props.selected === 'About' ? 'roundy' : '' }`}>
        <p>B.Ö.</p>
      </div>
      <div className='tabs'>
        <button onClick={() => props.func('About')} className={`headTab about ${props.selected}`}>
          About
        </button>
        <button onClick={() => props.func('Experience')} className={`headTab experience ${props.selected}`}>
          Experience
        </button>
        <button onClick={() => props.func('SoftwareSkills')} className={`headTab softwareskills ${props.selected}`}>
          Software Skills
        </button>
        <button onClick={() => props.func('Education')} className={`headTab education ${props.selected}`}>
          Education
        </button>
      </div>
      <div className={`mail ${props.selected === 'Education' ? 'roundy' : '' }`}>
        <p>bilal.ozlu@outlook.com</p>
      </div>
    </div>
  );
}

export default HeaderTabs;
