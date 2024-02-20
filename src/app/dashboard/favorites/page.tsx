

import { FavoritePokemons } from "@/app/pokemons/components/FavoritePokemons";
import { PokemonGrid } from "@/app/pokemons/components/PokemonGrid";
import { PokemonsResponse } from "@/app/pokemons/interfaces/pokemons-response";
import { SimplePokemon } from "@/app/pokemons/interfaces/simple-pokemon";
import { useAppSelector } from "@/store";
import { Metadata } from "next";
import Image from "next/image";
import { IoHeadsetOutline, IoHeartOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: 'Pokemones favoritos',
  description: 'Página con los pokemones favoritos seleccionados',
  keywords: ["Favourite page", "Lista de pokemones favoritos"]
 };


export default  function PokemonsPage() {
  
  return (
    <div className="flex flex-col">
        <span className="text-5xl my-2">Listado de Pokémons <small>estático</small></span>
        <FavoritePokemons />
        
    </div>
  );
}

