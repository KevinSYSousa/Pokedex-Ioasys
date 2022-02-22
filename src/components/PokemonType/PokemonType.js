import React from 'react';
import {StyledContainer, StyledType} from './styles';

const PokemonType = ({color, type}) => {
	return (
		<StyledContainer color={color}>
			<StyledType>{type.charAt(0).toUpperCase() + type.slice(1)}</StyledType>
		</StyledContainer>
	);
};

export default PokemonType;
