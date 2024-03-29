import { PokemonGrid } from "@/app/pokemons/components/PokemonGrid";
import { PokemonsResponse } from "@/app/pokemons/interfaces/pokemons-response";
import { SimplePokemon } from "@/app/pokemons/interfaces/simple-pokemon";
import Image from "next/image";


export const metadata = {
 title: '151 Pokemons',
 description: '151 Pokemons',
};

const getPokemons = async (
  limit = 150,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(150);
  return (
    <div className="flex flex-col">
        <span className="text-5xl my-2">Listado de Pokémons <small>estático</small></span>
        <PokemonGrid pokemons={pokemons}/>
      {/* <h1>Pokemons page</h1>
          {JSON.stringify(pokemons)} */}
    </div>
  );
}
