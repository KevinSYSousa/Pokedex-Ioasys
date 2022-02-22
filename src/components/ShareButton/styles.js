import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const StyledView = styled.View`
	position: absolute;
	align-items: center;
	justify-content: center;
	bottom: 90px;
	left: 45%;
`;

export const StyledButton = styled.TouchableOpacity`
	height: 50px;
	width: 50px;
	justify-content: center;
	align-items: center;
	border-radius: 50px;
	border-width: 2px;
	border-color: ${theme.colors.secondary_color};
	background-color: ${props =>
		props.nightMode ? theme.colors.dark_gray : theme.colors.white};
`;

export const StyledImage = styled.Image`
	height: 40px;
	width: 40px;
	margin-bottom: 5px;
	tint-color: ${theme.colors.secondary_color};
`;
