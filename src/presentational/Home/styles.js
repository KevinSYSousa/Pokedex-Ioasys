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

export const StyledFlatList = styled.FlatList.attrs({
	columnWrapperStyle: {
		justifyContent: 'space-between',
	},
	numColumns: 3,
	initialNumToRender: 20,
	onEndReachedThreshold: 0.8,
})`
	flex: 1;
	margin-top: 10px;
`;

export const StyledIndicatorContainer = styled.View`
	height: 30px;
	align-items: center;
`;

export const StyledFooterIcon = styled.Image`
	height: 14px;
	width: 25px;
`;

export const StyledEmptyContainer = styled.View`
	flex: 1;
	align-items: center;
	margin-top: 80px;
`;
export const StyledEmptyTitle = styled.Text`
	font-family: ${theme.fonts.bold};
	font-size: 150px;
	color: ${theme.colors.text_gray};
`;

export const StyledEmptySubtitle = styled.Text`
	font-weight: 600;
	font-size: 22px;
	line-height: 31px;
	color: ${theme.colors.text_gray};
	margin-top: 20px;
`;

export const StyledIndicator = styled.ActivityIndicator.attrs({
	size: 25,
	color: theme.colors.secondary_color,
})`
	padding: 10px;
`;

export const StyledButton = styled.TouchableOpacity`
	width: 40px;
	left: 20px;
	align-items: center;
	justify-content: center;
`;

export const StyledSearchImage = styled.Image`
	tint-color: ${theme.colors.secondary_color};
`;
