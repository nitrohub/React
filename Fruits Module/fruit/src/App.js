import './App.css';
import {choice,remove} from './helpers'
import fruits from './fruit'

function App() {
  while(fruits.length!=0){
    var randomFruit = choice(fruits);
    console.log("I would like one "+randomFruit+" fruit please");
    console.log("Here you go : "+remove(fruits,randomFruit));
    console.log("Delicious may I have another one");
  }

  console.log("I am sorry, we are out of fruits");
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
