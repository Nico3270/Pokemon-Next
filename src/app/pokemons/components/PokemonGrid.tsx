import React from 'react'
import { SimplePokemon } from '../interfaces/simple-pokemon';
import Image from 'next/image';
import { PokemonCard } from './PokemonCard';

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({pokemons}:Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
        {pokemons.map((pokemon) => (
          
          // <Image
          //   key={pokemon.id}
          //   src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemons.id}.svg`}
          //   width={100}
          //   height={100}
          //   alt={pokemons}
          // ></Image>
          <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        ))}
      </div>
  )
}
