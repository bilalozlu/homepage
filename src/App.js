import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <div className='links1'>
          <Link to={"./portfolio"}>Portfolio</Link>
          |
          <a href="BilalOzlu_resume.pdf">
            Resume
          </a>
        </div>
        <div className='profile'>
          <img src="profile.jpeg" alt="profile" width="150px" />
        </div>
        <h1>
          <Link to={"./portfolio"}>Bilal ÖZLÜ</Link>
        </h1>
        <p>Full-stack javascript engineer</p>
        <div className='links2'>
          <a className="link" href="https://www.linkedin.com/in/bilalozlu/">
            <img src="linkedin_bw.png" alt="linkedin" width="40px" />
            <img src="linkedin.png" alt="linkedin" width="40px" />
          </a>
          <a className="link" href="https://github.com/bilalozlu/">
            <img src="github.png" alt="github" width="42px" />
            <img src="github.png" alt="github" width="42px" />
          </a>
          <a className="link" href="https://www.medium.com/@bilalozlu/">
            <img src="medium.png" alt="medium" width="41px" />
            <img src="medium.png" alt="medium" width="41px" />
          </a>
          <a className="link" href="https://www.hackerrank.com/bilalozlu/">
            <img src="hackerrank_bw.png" alt="hackerrank" width="40px" />
            <img src="hackerrank.png" alt="hackerrank" width="40px" />
          </a>
        </div>
      </header>
      <footer>
        <p className='copyright'>Designed & developed & photographed by Bilal ÖZLÜ {'\u00a9'} 2022</p>
      </footer>
    </div>
  );
}

export default App;
