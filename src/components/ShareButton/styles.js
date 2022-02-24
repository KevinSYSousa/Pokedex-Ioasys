import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const StyledView = styled.View`
	align-items: center;
	justify-content: center;
	margin: 10px;
`;

export const StyledButton = styled.TouchableOpacity`
	height: 30px;
	width: 30px;
	justify-content: center;
	align-items: center;
`;

export const StyledImage = styled.Image`
	height: 25px;
	width: 25px;
	margin-bottom: 5px;
	tint-color: ${theme.colors.secondary_color};
`;
