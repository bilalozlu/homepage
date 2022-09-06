import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <h2>
          Bilal ÖZLÜ
        </h2>
        <a href="BilalOzlu_CV.pdf">
          Resume
        </a>
        <Link to={"./CV"}>Portfolio (under construction)</Link>
        <Link to={"./projects"}>Projects</Link>
        <a href="#">
          Blogs (coming soon)
        </a>
      </header>
      <footer>
        <p>
          Burası benim tarlam bilader!
        </p>
        <img alt="scarecrow" src="korkuluk.png" width="100px" />
      </footer>
    </div>
  );
}

export default App;
