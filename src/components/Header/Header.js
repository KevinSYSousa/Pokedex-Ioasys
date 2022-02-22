import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme} from '../../store/slices/user';

import {
	StyledSafeAreaView,
	StyledContainer,
	StyledTitle,
	StyledSwitchContainer,
	StyleTitleContainer,
	StyledImageContainer,
	StyledSwitch,
} from './styles';

const Header = ({title}) => {
	const {nightMode} = useSelector(handleUserChoices => handleUserChoices);
	const dispatch = useDispatch();

	const toggleNightMode = () => {
		dispatch(changeTheme());
	};

	return (
		<>
			<StyledSafeAreaView nightMode={nightMode} />
			<StyledContainer nightMode={nightMode}>
				<StyleTitleContainer>
					<StyledImageContainer
						source={require('../../assets/icons/header-logo.png')}
					/>
					<StyledTitle>{title}</StyledTitle>
				</StyleTitleContainer>
				<StyledSwitchContainer>
					<StyledSwitch
						nightMode={nightMode}
						value={nightMode}
						onValueChange={toggleNightMode}
					/>
				</StyledSwitchContainer>
			</StyledContainer>
		</>
	);
};

export default Header;
