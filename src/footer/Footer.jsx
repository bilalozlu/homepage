function Footer() {
  return (
      <div className='footer'>
        <h3>More</h3>
        <div>
          Download my resume: <a href="./resume.pdf" style={{color: '#ff4d5a'}}>/resume.pdf</a>
        </div>
        <div>
          Saved solutions for coding problems: <a href="./solutions" style={{color: '#ff4d5a'}}>/solutions</a>
        </div>
        <div>
          What am I doing now: <a href="./now" style={{color: '#ff4d5a'}}>/now</a>
        </div>
      </div>
  );
}

export default Footer;
