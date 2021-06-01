import React from 'react';
import Link from 'next/link';

export async function getStaticProps(context) {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
    .then((respostaDoServer) => {
      if(respostaDoServer.ok) {
        return respostaDoServer.json();
      }
    })
    .then((respostaEmObjeto) => {
      return respostaEmObjeto.pokemon_entries;

  })
  return {
    props: {
      pokemons
    }, // will be passed to the page component as props
  }
}

export default function Home(props) {

  const { pokemons } = props;

  return (
    <div>
      Pokédex - JrDev
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/sobre">
            <a>Sobre o projeto</a>
          </Link>
        </li>
      </ul>

      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.entry_number}>
            <Link href={`/pokemon/${pokemon.entry_number}`}>
              <a>
                {pokemon.pokemon_species.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}