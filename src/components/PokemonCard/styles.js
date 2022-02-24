import styled from 'styled-components/native';
import theme from '../../styles/theme';
import {SvgUri} from 'react-native-svg';

export const StyledCard = styled.TouchableOpacity`
	height: 115px;
	width: 28%;
	border-radius: 8px;
	border-width: 1px;
	border-color: ${(props) => props.color};
	justify-content: space-between;
	align-items: center;
	overflow: hidden;
	margin-bottom: 20px;
`;

export const StyledId = styled.Text`
	color: ${(props) => props.color};
	font-size: 8px;
	font-family: ${theme.fonts.regular};
	margin-left: 70px;
`;

export const StyledImage = styled(SvgUri).attrs({
	height: 75,
	width: 75,
})(() => '');

export const StyledNameContainer = styled.View`
	background-color: ${(props) => props.color};
	justify-content: center;
	height: 24px;
	width: 100%;
`;

export const StyledName = styled.Text`
	text-align: center;
	color: ${theme.colors.white};
	font-family: ${theme.fonts.regular};
	font-size: 10px;
`;

export const StyledDefaultImage = styled.Image`
	width: 90px;
	height: 65px;
`;
