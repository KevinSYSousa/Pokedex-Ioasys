import React from 'react';
import {StyledButton, StyledImage, StyledView} from './styles';

const SharedButton = ({nightMode, ...rest}) => {
	return (
		<>
			<StyledView>
				<StyledButton nightMode={nightMode} {...rest}>
					<StyledImage source={require('../../assets/icons/share.png')} />
				</StyledButton>
			</StyledView>
		</>
	);
};

export default SharedButton;
