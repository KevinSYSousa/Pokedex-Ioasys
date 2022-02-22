import React from 'react';
import {
	StyledView,
	StyledTitle,
	StyledContent,
	StyledButton,
	StyledButtonContainer,
	StyledImage,
} from './styles';

const RemoveWarn = ({yes, no, active, nightMode}) => {
	return (
		<>
			{active && (
				<StyledView nightMode={nightMode}>
					<StyledTitle>Deseja remover favorito?</StyledTitle>
					<StyledImage
						source={{
							uri: 'https://c.tenor.com/2X6auNAZN8oAAAAi/psyduckpc2.gif',
						}}
					/>
					<StyledButtonContainer>
						<StyledButton>
							<StyledContent onPress={no}>Não</StyledContent>
						</StyledButton>
						<StyledButton>
							<StyledContent onPress={yes}>Sim</StyledContent>
						</StyledButton>
					</StyledButtonContainer>
				</StyledView>
			)}
		</>
	);
};

export default RemoveWarn;
