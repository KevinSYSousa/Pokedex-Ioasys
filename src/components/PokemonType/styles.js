import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const StyledContainer = styled.View`
	border-radius: 10px;
	background-color: ${props => props.color};
	height: 20px;
	padding-bottom: 2px;
	margin-left: 10px;
`;

export const StyledType = styled.Text`
	color: ${theme.colors.white};
	font-size: 12px;
	margin-left: 8px;
	margin-right: 8px;
	font-family: ${theme.fonts.bold};
`;
