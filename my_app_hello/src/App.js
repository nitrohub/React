import logo from './logo.svg';
import './App.css';
import hunny from './indu.js'

function App() {

  hunny();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to Reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nitesh React Create React App
        </a>
      </header>
    </div>
  );
}

export default App;
