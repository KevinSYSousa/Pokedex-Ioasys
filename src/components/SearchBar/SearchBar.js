import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
	StyledContainer,
	StyledInputContainer,
	StyledFavorites,
	StyledFavoritesButton,
	StyledInputLabel,
} from './styles';

const SearchBar = ({...rest}) => {
	const {navigate} = useNavigation();

	return (
		<>
			<StyledContainer>
				<StyledInputContainer>
					<StyledInputLabel {...rest} />
				</StyledInputContainer>
				<StyledFavoritesButton onPress={() => navigate('Favorite')}>
					<StyledFavorites
						source={require('../../assets/icons/favorite.png')}
					/>
				</StyledFavoritesButton>
			</StyledContainer>
		</>
	);
};

export default SearchBar;
