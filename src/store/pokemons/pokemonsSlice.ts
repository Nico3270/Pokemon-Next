import { SimplePokemon } from '@/app/pokemons/interfaces/simple-pokemon';
import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit';


export interface PokemonsState {
    favorites : {[key:string]: SimplePokemon},
}



const getInitialState = ():PokemonsState => {

  // if (typeof localStorage === "undefined") return {};

  const favorites = JSON.parse(localStorage.getItem("favorite-pokemons") ?? "{}"); /* En esta parte del código se utilizan
  los dos simbolos de interrogación para que en caso de que no haya ningún pokemon almacenado no se retorne null si no que s
  cree el objeto {} */
  return favorites;
}

const initialState:PokemonsState = {
  favorites: {},
  // "1": {id: "1", name: "bulbasuar"},
  // "2": {id: "1", name: "ivisaur"},
  // "3": {id: "3", name: "venusaur"},
};





const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(state, action:PayloadAction<{[key: string]:SimplePokemon}>){
      state.favorites = action.payload;

    },
    toggleFavorite(state, action:PayloadAction<SimplePokemon>) {
        const pokemon = action.payload;
        const {id} = pokemon;
        if (!!state.favorites[id]) {
            delete state.favorites[id];
            
        } else {
          state.favorites[id] = pokemon;
        }
        localStorage.setItem("favorite-pokemons", JSON.stringify( state.favorites))
    },
  }
});




export const {toggleFavorite, setFavoritePokemons} = pokemonsSlice.actions

export default pokemonsSlice.reducer