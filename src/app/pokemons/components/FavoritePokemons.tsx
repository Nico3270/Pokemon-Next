"use client";

import { useAppSelector } from "@/store";
import React, { useEffect, useState } from "react";
import { PokemonGrid } from "./PokemonGrid";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
  const pokemons = useAppSelector((state) => state.pokemons.favorites);
  const favoritos = Object.values(pokemons);
  // const [pokemones, setPokemons] = useState(favoritos);

  // useEffect(() => {
  //   setPokemons(favoritos);
  // },[favoritos])



  return (
    <>
      {favoritos.length === 0? 
        (<NoFavorites />)
       : 
        (<PokemonGrid pokemons={favoritos} />)
      }
    </>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500"></IoHeartOutline>
      <span>No hay favoritos</span>
    </div>
  );
};
