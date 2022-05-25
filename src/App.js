import './App.css';
import CV from './assets/BilalOzlu_CV.pdf';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Bilal ÖZLÜ
        </p>
        <a href={CV}>
          See my CV
        </a>
        <p>
          Buraya bi pörtföy gelcek, bi de afilli yazılar, şööle tooltipli filan interaktif bi cv
        </p>
      </header>
    </div>
  );
}

export default App;
