import React, { useEffect, useState } from 'react';

export default function Home() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokedex/2/')
      .then((respostaDoServer) => {
        if(respostaDoServer.ok) {
          return respostaDoServer.json();
        }
      })
      .then((respostaEmObjeto) => {
        console.log(respostaEmObjeto.pokemon_entries);
        setPokemons(respostaEmObjeto.pokemon_entries);

      })
  }, []);

  return (
    <div>
      Pokédex - JrDev
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.entry_number}>
            {pokemon.pokemon_species.name}
          </li>
        ))}
      </ul>
    </div>
  );
}