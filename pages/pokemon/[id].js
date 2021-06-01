import React from 'react';

export default function Pokemon({ pokemon }) {
  console.log(pokemon.sprites.front_default);

  return(
    <div>
      <img src={pokemon.sprites.front_default} alt="Imagem de um pokémon" />

    </div>
  );

}

export async function getStaticProps({ params }) {
  //console.log(params);
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    .then((respostaDoServer) => {
      if(respostaDoServer.ok) {
        return respostaDoServer.json();
      }

      throw new Error('Deu problema');
    })
    .then((respostaEmObjeto) => respostaEmObjeto);

  return {
    props: {
      pokemon
    }
  }
}

export async function getStaticPaths() {
  // rodar code node (exemplo leitura de lista de markdown para blog)
  return {
    paths: [
      {
        params: {
          id: '1'
        }
      }, // See the "paths" section below
      {
        params: {
          id: '2'
        }
      },
      {
        params: {
          id: '3'
        }
      }
    ],
    fallback: false // See the "fallback" section below
  };
}