import { Component } from 'react/cjs/react.production.min';
import PokeDox from './PokeDox';
import {sumArray} from './pokemon';

class PokeGame extends Component{
    render(){
        const pokemons = this.props.pokemons;
        const team1    = [...pokemons.slice(0,(pokemons.length/2))];
        const team2    = [...pokemons.slice(4,pokemons.length)];
        const score1   = sumArray(team1);
        const score2   = sumArray(team2);

        const isWinner = score1==score2?null:(score1>score2)?true:false;

        return(
            <div>
                <h2 align="center">PokeDox</h2>
                <PokeDox participants={team1} isWinner={isWinner}/>
                <PokeDox participants={team2} isWinner={isWinner!==null?!isWinner:null}/>
            </div>
        );
    }

}

export default PokeGame;