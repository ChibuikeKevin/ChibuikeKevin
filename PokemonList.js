import React from 'react'
import './style/PokemonList.css';

function PokemonList() {
    const pokemons = ["Pikachu", "Squirtle", "Bulbasaur"];

    return(
        <div className="pokemon-list">
            <h2 className="pokemon-list-title">Pokemons</h2>
            <ul>
                {pokemons.map((pokemon) => (
                    <li className="pokemon-item" key={pokemon}>{pokemon}</li>
                ))}
            </ul>
        </div>
    );
};
export default PokemonList;