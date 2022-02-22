import React from 'react';
import {StyledWarnContainer, StyledWarnContent} from './styles';

const LikeWarn = ({content, active, nightMode}) => {
	return (
		<>
			{active && (
				<StyledWarnContainer>
					<StyledWarnContent nightMode={nightMode}>{content}</StyledWarnContent>
				</StyledWarnContainer>
			)}
		</>
	);
};

export default LikeWarn;
