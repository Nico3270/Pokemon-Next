import { PokemonGrid } from "@/app/pokemons/components/PokemonGrid";
import { PokemonsResponse } from "@/app/pokemons/interfaces/pokemons-response";
import { SimplePokemon } from "@/app/pokemons/interfaces/simple-pokemon";
import Image from "next/image";


export const metadata = {
 title: 'Favoritos',
 description: 'Favoritos',
};


export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">
        <span className="text-5xl my-2">Pokemons favoritos <small>Global State</small></span>
        <PokemonGrid pokemons={[]}/>
      {/* <h1>Pokemons page</h1>
          {JSON.stringify(pokemons)} */}
    </div>
  );
}
