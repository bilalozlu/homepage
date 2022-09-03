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
          See my resume
        </a>
        <Link to={"./CV"}>See my portfolio (under construction)</Link>
        <a href="https://translator.bilalozlu.com/">
          See my projects
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
