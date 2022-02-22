import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const StyledView = styled.View`
	flex: 1;
	position: absolute;
	z-index: 10;
	background-color: ${theme.colors.dark_gray};
	opacity: 0.8;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

export const StyledImage = styled.Image`
	height: 90px;
	width: 90px;
	tint-color: ${theme.colors.secondary_color};
`;

export const StyledText = styled.Text`
	color: ${theme.colors.secondary_color};
	border-radius: 10px;
	padding: 10px;
	font-size: 20px;
	margin-top: 10px;
`;
