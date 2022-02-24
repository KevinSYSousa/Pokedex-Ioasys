import styled from 'styled-components/native';
import theme from '../../styles/theme';
import {SvgUri} from 'react-native-svg';

export const StyledContainer = styled.View`
	align-items: center;
`;

export const StyledPicture = styled(SvgUri).attrs({
	height: 200,
	width: 200,
})`
	position: absolute;
	z-index: 2;
`;

export const StyledDefaultImage = styled.Image`
	width: 200px;
	height: 150px;
	position: absolute;
	z-index: 2;
`;

export const StyledCardContainer = styled.View`
	background-color: ${(props) =>
		props.nightMode ? theme.colors.dark_gray : theme.colors.white};
	width: 95%;
	height: 70%;
	border-radius: 15px;
	margin-top: 150px;
`;

export const StyledLikeContainer = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
`;

export const StyledLikeButton = styled.TouchableOpacity`
	margin: 10px;
`;

export const StyledLike = styled.Image`
	height: 32px;
	width: 32px;
`;

export const StyledTypesContainer = styled.View`
	flex-direction: row;
	align-items: center;
	height: 30px;
	padding-left: 15px;
`;

export const StyledCharacteristics = styled.View`
	height: 60px;
	margin-top: 10px;
	padding-left: 15px;
	padding-right: 15px;
	justify-content: center;
	align-items: center;
	flex-direction: row;
`;

export const StyledMeasurementsContainer = styled.View`
	width: 75px;
	align-items: center;
	justify-content: center;
	padding-top: 10px;
	padding-bottom: 10px;
	flex-direction: row;
	flex-wrap: wrap;
	margin-left: 5px;
`;

export const StyledMeasurementsIcon = styled.Image`
	margin-right: 5px;
	tint-color: ${(props) =>
		props.nightMode ? theme.colors.white : theme.colors.dark_gray};
`;

export const StyledMeasurements = styled.Text`
	color: ${(props) =>
		props.nightMode ? theme.colors.white : theme.colors.dark_gray};
	font-size: 14px;
	line-height: 16px;
	font-family: ${theme.fonts.regular};
	margin-top: 5px;
`;

export const StyledMeasurementsTitle = styled.Text`
	color: ${theme.colors.text_gray};
	font-size: 14px;
	line-height: 12px;
	font-family: ${theme.fonts.regular};
	padding-top: 10px;
`;

export const StyledSkillsContainer = styled.View`
	width: 60%;
	padding-top: 10px;
	padding-bottom: 10px;
	align-items: center;
`;

export const StyledDetails = styled.Text`
	color: ${(props) =>
		props.nightMode ? theme.colors.white : theme.colors.dark_gray};
	text-align: justify;
	font-size: 14px;
	line-height: 18px;
	font-family: ${theme.fonts.regular};
`;

export const StyledStatsContainer = styled.View`
	height: 40%;
	margin-top: 20px;
	margin-left: 15px;
	margin-right: 15px;
`;

export const StyledStatsTitle = styled.Text`
	color: ${(props) => props.color};
	padding-top: 5px;
	padding-bottom: 15px;
	font-size: 18px;
	line-height: 18px;
	font-family: ${theme.fonts.bold};
`;
