import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <h2>
          Bilal ÖZLÜ
        </h2>
        <Link to={"./portfolio"}>Portfolio</Link>
        <a href="BilalOzlu_resume.pdf">
          Resume
        </a>
        <Link to={"./projects"}>Projects</Link>
        <a href="/">
          Blogs (coming soon)
        </a>
      </header>
      <footer>
        <p>
          Welcome to my land, fellow
        </p>
        <img alt="scarecrow" src="korkuluk.png" width="100px" />
        <p className='copyright'>Designed and developed by Bilal ÖZLÜ {'\u00a9'} 2022</p>
      </footer>
    </div>
  );
}

export default App;
