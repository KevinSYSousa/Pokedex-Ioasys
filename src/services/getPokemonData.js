import api from './api';

const getPokemonData = async (page) => {
  try {
    const { data } = await api.get(`pokemon?limit=30&offset=${page}`);
    for (let index = 0; index < data.results.length; index++) {
      const pokemonDetails = await api.get(
        `pokemon/${data.results[index].url.split('/')[6]}`
      );
      data.results[index].types = pokemonDetails.data.types;
      data.results[index].color = pokemonDetails.data.types[0].type.name;
      data.results[index].abilities = pokemonDetails.data.abilities;
      data.results[index].height = pokemonDetails.data.height;
      data.results[index].id = pokemonDetails.data.id;
      data.results[index].name = pokemonDetails.data.forms[0].name;
      data.results[index].weight = pokemonDetails.data.weight;
      data.results[index].stats = pokemonDetails.data.stats;
    }
    return data.results;
  } catch (e) {
    return e.response.data;
  }
};

export default getPokemonData;
