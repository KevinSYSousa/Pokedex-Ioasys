import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const StyledWarnContainer = styled.View`
	position: absolute;
	z-index: 5;
	height: 50px;
	width: 90%;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	bottom: 2px;
`;

export const StyledWarnContent = styled.Text`
	color: ${(props) =>
		props.nightMode ? theme.colors.dark_gray : theme.colors.white};
	text-align: center;
	font-size: 20px;
`;
