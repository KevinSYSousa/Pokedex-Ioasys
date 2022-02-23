import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const StyledView = styled.View`
  height: 20px;
  width: 150px;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 10;
  top: 80px;
  left: 150px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.color ? theme.colors.white : theme.colors.dark_gray};
`;

export const StyledContainer = styled.View`
  position: absolute;
  left: 30px;
  top: 10px;
  height: 15px;
  width: 15px;
  transform: rotate(45deg);
  background-color: ${(props) =>
    props.color ? theme.colors.white : theme.colors.dark_gray};
`;

export const StyledWarn = styled.Text`
  font-family: ${theme.fonts.regular};
  color: ${(props) =>
    props.color ? theme.colors.dark_gray : theme.colors.white};
`;
