import './Pokemon.css';
import { Component } from "react/cjs/react.production.min";

class PokeCard extends Component{
    render(){
        const pokeGon = this.props.PokeCard;
        const imgurl  = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeGon.id}.png`;
        
        return(
            <div className="Poke-card">
                <h4 style={{color:"blue"}}>{pokeGon.name}</h4>
                <img src={imgurl} width="150vw" height="150vh"/>
                <p>Type:{pokeGon.type}</p>
                <p>EXP:{pokeGon.base_experience}</p>
            </div>
        );
    }
}

export default PokeCard;