import React from 'react';
import {StyledView, StyledContainer, StyledWarn} from './styles';

const HintSearch = ({active, nightMode}) => {
	return (
		<>
			{active && (
				<StyledView color={nightMode}>
					<StyledContainer color={nightMode} />
					<StyledWarn color={nightMode}>Insira nome ou id</StyledWarn>
				</StyledView>
			)}
		</>
	);
};

export default HintSearch;
