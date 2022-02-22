import styled from 'styled-components/native';
import theme from '../../styles/theme';
import {FloatingLabelInput} from 'react-native-floating-label-input';

export const StyledContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 80px;
`;

export const StyledFavorites = styled.Image`
	height: 24px;
	width: 24px;
	margin-right: 15px;
`;

export const StyledFavoritesButton = styled.TouchableOpacity`
	opacity: 1;
	transition: 0.5s;
`;

export const StyledInputContainer = styled.View`
	height: 55px;
	width: 305px;
`;

export const StyledInputLabel = styled(FloatingLabelInput).attrs(props => ({
	containerStyles: {
		borderColor: theme.colors.secondary_color,
		borderWidth: 2,
		borderRadius: 10,
		height: 50,
		paddingHorizontal: 30,
		marginTop: 5,
	},
	labelStyles: {
		backgroundColor: props.nightMode
			? theme.colors.dark_gray
			: theme.colors.white,
		paddingRight: 10,
		paddingLeft: 5,
	},
	customLabelStyles: {
		colorBlurred: theme.colors.secondary_color,
		colorFocused: theme.colors.secondary_color,
		leftFocused: 30,
		fontSizeFocused: 16,
	},
	inputStyles: {
		fontSize: 14,
		color: theme.colors.medium_gray,
	},
	label: 'Buscar',
	hint: 'Buscar pokemon',
	hintTextColor: theme.colors.medium_gray,
	staticLabel: true,
}))(() => '');
