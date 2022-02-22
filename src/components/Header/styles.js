import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const StyledSafeAreaView = styled.SafeAreaView`
	height: 20px;
	background-color: ${props =>
		props.nightMode ? theme.colors.dark_gray : theme.colors.white};
`;

export const StyledContainer = styled.View`
	height: 60px;
	background-color: ${props =>
		props.nightMode ? theme.colors.dark_gray : theme.colors.white};
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
`;

export const StyledTitle = styled.Text`
	margin-left: 10px;
	font-size: 24px;
	font-family: ${theme.fonts.bold};
	color: ${theme.colors.secondary_color};
`;

export const StyledSwitchContainer = styled.View`
	border-radius: 30px;
	border-color: ${theme.colors.secondary_color};
	border-width: 1px;
`;

export const StyledSwitch = styled.Switch.attrs(props => ({
	trackColor: {
		false: theme.colors.white,
		true: theme.colors.dark_gray,
	},
	thumbColor: props.nightMode
		? theme.colors.secondary_color
		: theme.colors.medium_gray,
}))`
	size: 20px;
`;

export const StyledImageContainer = styled.Image`
	left: 5px;
	margin-bottom: 5px;
`;

export const StyleTitleContainer = styled.View`
	width: 249px;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;
