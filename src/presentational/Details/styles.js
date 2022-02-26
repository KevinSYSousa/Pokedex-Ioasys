import ViewShot from 'react-native-view-shot';
import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const StyledView = styled.View`
	flex: 1;
	background-color: ${(props) => props.color};
`;

export const StyleShotView = styled(ViewShot)`
	background-color: ${(props) => props.color};
	flex: 1;
`;

export const StyledBackground = styled.Image`
	position: absolute;
	left: 180px;
	top: 5px;
`;

export const StyledHeaderContainer = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 10px;
`;

export const StyledIcon = styled.Image`
	margin-right: 15px;
`;

export const StyledName = styled.Text`
	font-size: 24px;
	font-family: ${theme.fonts.bold};
	color: ${theme.colors.white};
	width: 260px;
`;

export const StyledId = styled.Text`
	font-size: 12px;
	font-family: ${theme.fonts.bold};
	color: ${theme.colors.white};
	margin-left: 15px;
`;
