import api from './api';

const getSearchPokemon = async search => {
	try {
		const {data} = await api.get(`pokemon/${search}`);
		data.types = data.types;
		data.color = data.types[0].type.name;
		data.abilities = data.abilities;
		data.height = data.height;
		data.id = data.id;
		data.name = data.forms[0].name;
		data.weight = data.weight;
		data.stats = data.stats;
		return data;
	} catch (e) {
		return e.response.data;
	}
};

export default getSearchPokemon;
