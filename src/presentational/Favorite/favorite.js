import React, {useEffect, useState} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {startLoading} from '../../store/slices/user';
import {getFavorite} from '../../services/favoritePokemon';

import Header from '../../components/Header/Header';
import {
	StyledView,
	StyledContainer,
	StyledTitleContainer,
	StyledTitle,
	StyledIcon,
	StyledFooter,
	StyledFooterText,
	StyledBackButton,
	StyledFooterIcon,
	StyledEmpty,
	StyledScrollView,
} from './styles';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Loading from '../../components/Loading/Loading';

const Favorite = () => {
	const [favorite, setFavorite] = useState();
	const {nightMode, loading} = useSelector(
		(handleUserChoices) => handleUserChoices
	);
	const isFocused = useIsFocused();
	const dispatch = useDispatch();
	const {goBack} = useNavigation();

	useEffect(() => {
		getData();
	}, [isFocused]);

	const getData = async () => {
		dispatch(startLoading(true));
		const data = await getFavorite('favorite');
		while (data.length < 12) {
			data.push('null');
		}
		setFavorite(data);
		dispatch(startLoading(false));
	};

	return (
		<StyledView nightMode={nightMode}>
			<Loading loading={loading} />
			<StyledContainer>
				<Header title={'ioasys pokédex'} nightMode={nightMode} />
				<StyledTitleContainer>
					<StyledIcon source={require('../../assets/icons/favorite.png')} />
					<StyledTitle>Meus favoritos</StyledTitle>
				</StyledTitleContainer>
				<StyledScrollView
					data={favorite}
					renderItem={({item}) =>
						item.id ? <PokemonCard pokemon={item} /> : <StyledEmpty />
					}
				/>
				<StyledFooter>
					<StyledBackButton onPress={() => goBack()}>
						<StyledFooterIcon source={require('../../assets/icons/back.png')} />
						<StyledFooterText>Voltar</StyledFooterText>
					</StyledBackButton>
				</StyledFooter>
			</StyledContainer>
		</StyledView>
	);
};

export default Favorite;
