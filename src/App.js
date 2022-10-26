import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Bilal ÖZLÜ
        </h1>
        <Link to={"./portfolio"}>Portfolio</Link>
        <a href="BilalOzlu_resume.pdf">
          Resume
        </a>
        <Link to={"./projects"}>Projects</Link>
        <div className='links'>
          <a className="link" href="https://www.linkedin.com/in/bilalozlu/">
            <img src="linkedin_bw.png" alt="linkedin" width="40px" />
            <img src="linkedin.png" alt="linkedin" width="40px" />
          </a>
          <a className="link" href="https://github.com/bilalozlu/">
            <img src="github_bw.png" alt="github" width="40px" />
            <img src="github.png" alt="github" width="40px" />
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
