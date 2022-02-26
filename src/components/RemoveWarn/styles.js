import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const StyledView = styled.View`
	position: absolute;
	z-index: 5;
	height: 150px;
	width: 60%;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	top: 250px;
	border-radius: 10px;
	border-width: 2px;
	border-color: ${theme.colors.secondary_color};
	background-color: ${(props) =>
		props.nightMode ? theme.colors.dark_gray : theme.colors.white};
`;

export const StyledTitle = styled.Text`
	color: ${theme.colors.secondary_color};
	font-size: 18px;
`;
export const StyledContent = styled.Text`
	color: ${theme.colors.white};
`;

export const StyledButtonContainer = styled.View`
	flex-direction: row;
	margin-top: 20px;
	justify-content: space-between;
`;

export const StyledButton = styled.TouchableOpacity`
	background-color: ${theme.colors.secondary_color};
	align-items: center;
	border-radius: 10px;
	width: 50px;
	margin-right: 20px;
	margin-left: 20px;
	padding: 5px;
`;

export const StyledImage = styled.Image`
	height: 50px;
	width: 90px;
`;
