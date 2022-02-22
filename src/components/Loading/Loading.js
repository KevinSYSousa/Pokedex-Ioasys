import React from 'react';
import {StyledImage, StyledView, StyledText} from './styles';

const Loading = ({loading}) => {
	return (
		<>
			{loading && (
				<StyledView>
					<StyledImage
						source={{
							uri: 'https://c.tenor.com/Ie0mnoxeVHgAAAAi/pikachu-pokemon.gif',
						}}
					/>
					<StyledText>Carregando</StyledText>
				</StyledView>
			)}
		</>
	);
};

export default Loading;
