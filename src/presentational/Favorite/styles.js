import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const StyledView = styled.View`
	flex: 1;
	background-color: ${props =>
		props.nightMode ? theme.colors.dark_gray : theme.colors.white};
`;

export const StyledContainer = styled.View`
	flex: 1;
	padding-left: 25px;
	padding-right: 25px;
`;

export const StyledTitleContainer = styled.View`
	height: 5%;
	margin-bottom: 10px;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const StyledTitle = styled.Text`
	margin-top: 5px;
	font-size: 18px;
	font-family: ${theme.fonts.regular};
	color: ${theme.colors.secondary_color};
`;

export const StyledIcon = styled.Image`
	width: 24px;
	height: 24px;
	right: 20px;
`;

export const StyledFooter = styled.View`
	height: 50px;
	margin-top: 20px;
	margin-bottom: 40px;
	justify-content: center;
	align-items: center;
`;

export const StyledFooterText = styled.Text`
	font-size: 13px;
	font-family: ${theme.fonts.regular};
	text-align: center;
	color: ${theme.colors.text_gray};
`;

export const StyledBackButton = styled.TouchableOpacity`
	width: 61px;
	height: 18px;
	justify-content: center;
	align-items: center;
`;

export const StyledFooterIcon = styled.Image`
	margin-bottom: 10px;
`;

export const StyledScrollView = styled.FlatList.attrs({
	columnWrapperStyle: {
		justifyContent: 'space-between',
	},
	numColumns: 3,
	initialNumToRender: 12,
})`
	flex: 1;
	height: 65%;
`;

export const StyledExample = styled.View`
	width: 105px;
	height: 115px;
	opacity: 0.2;
	background-color: ${theme.colors.light_gray};
	border-radius: 10px;
	margin-bottom: 20px;
`;
