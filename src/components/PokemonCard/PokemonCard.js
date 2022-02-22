import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
	StyledCard,
	StyledId,
	StyledImage,
	StyledName,
	StyledNameContainer,
	StyledDefaultImage,
} from './styles';
import theme from '../../styles/theme';

const PokemonCard = ({pokemon}) => {
	const {navigate} = useNavigation();
	const limitReached = 650;

	return (
		<StyledCard
			color={theme.colors[pokemon.color]}
			activeOpacity={0.5}
			onPress={() => {
				navigate('Details', {
					pokemon: pokemon,
				});
			}}>
			<StyledId color={theme.colors[pokemon.color]}>
				#{('000' + pokemon.id).slice(-3)}
			</StyledId>
			{pokemon.id >= limitReached ? (
				<StyledDefaultImage
					source={require('../../assets/icons/no-data.png')}
				/>
			) : (
				<StyledImage
					uri={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
				/>
			)}
			<StyledNameContainer color={theme.colors[pokemon.color]}>
				<StyledName>
					{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
				</StyledName>
			</StyledNameContainer>
		</StyledCard>
	);
};

export default PokemonCard;
