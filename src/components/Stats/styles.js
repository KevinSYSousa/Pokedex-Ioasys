import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const StyledStatsContainer = styled.View`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 20px;
	width: 100%;
`;

export const StyledTitle = styled.Text`
	color: ${props => props.color};
	font-size: 14px;
	line-height: 16px;
	font-family: ${theme.fonts.regular};
	width: 40px;
`;

export const StyledValue = styled.Text`
	color: ${props =>
		props.nightMode ? theme.colors.white : theme.colors.dark_gray};
	font-size: 12px;
	line-height: 16px;
	font-family: ${theme.fonts.regular};
	margin-left: 20px;
	margin-right: 20px;
	left: 10px;
	width: 30px;
`;

export const StyledStatusBarContainer = styled.View`
	height: 8px;
	width: 68%;
	overflow: hidden;
`;

export const StyledStatusValue = styled.View`
	background-color: ${props => props.color};
	width: ${props => props.stats};
	height: 8px;
	z-index: 3;
	position: absolute;
`;

export const StyledStatusBar = styled.View`
	background-color: ${props => props.color};
	opacity: 0.2;
	width: 100%;
	height: 8px;
	z-index: 2;
	position: absolute;
`;

export const StyledLine = styled.View`
	margin-right: 10px;
	border-right-width: 1px;
	border-right-color: ${theme.colors.light_gray};
	height: 100%;
	left: 15%;
	position: absolute;
`;
