import pokemon,{shuffleArray} from './pokemon';
import PokeGame from './PokeGame'

function App() {
  shuffleArray(pokemon);
  return (
    <PokeGame pokemons={pokemon}/>
  );
}

export default App;
