import api from './api';

const getPersonalInformation = async id => {
	try {
		const {data} = await api.get(`pokemon-species/${id}`);
		return data.flavor_text_entries[3].flavor_text;
	} catch (e) {
		return e.response.data;
	}
};

export default getPersonalInformation;
