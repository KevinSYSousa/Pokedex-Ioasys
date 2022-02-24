import AsyncStorage from '@react-native-async-storage/async-storage';

const saveFavorite = async (key, pokemon) => {
	try {
		const favorites = (await getFavorite(key)) ?? 0;
		if (!favorites) {
			await AsyncStorage.setItem(key, JSON.stringify([pokemon]));
			return 'success';
		} else if (favorites.length === 12) {
			return 'full';
		} else {
			favorites.push(pokemon);
			await AsyncStorage.setItem(key, JSON.stringify(favorites));
			return 'success';
		}
	} catch (e) {
		return e;
	}
};

const getFavorite = async (key) => {
	try {
		const jsonValue = await AsyncStorage.getItem(key);
		return jsonValue != null ? JSON.parse(jsonValue) : [];
	} catch (e) {
		return e;
	}
};

const removeFavorite = async (key, id) => {
	try {
		const favorites = await getFavorite(key);
		const filter = favorites.filter((favorite) => favorite.id !== id);
		await AsyncStorage.setItem(key, JSON.stringify(filter));
		return 'success';
	} catch (e) {
		return e;
	}
};

export {saveFavorite, getFavorite, removeFavorite};
