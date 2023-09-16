import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  // El getState nos sirve para obtener informacion del state de
  // la aplicacion facilmente.
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    // Realizar peticion http (usamos fetch y axios para
    // este ejemplo)

    // Fetch:
    // const resp = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    // );
    // const data = await resp.json();

    // Axios:
    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );
    // Lo hacemos todo en una linea.

    // Hacer el dispatch del setPokemons
    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
