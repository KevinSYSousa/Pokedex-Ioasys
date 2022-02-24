import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {startLoading} from '../../store/slices/user';
import getPersonalInformation from '../../services/getPersonalInformation';
import {captureRef} from 'react-native-view-shot';
import Share from 'react-native-share';

import {StatusBar} from 'react-native';
import {
	StyledView,
	StyleShotView,
	StyledBackground,
	StyledHeaderContainer,
	StyledIcon,
	StyledName,
	StyledId,
} from './styles';
import theme from '../../styles/theme';
import DetailsCard from '../../components/DetailsCard/DetailsCard';
import Loading from '../../components/Loading/Loading';
import SharedButton from '../../components/ShareButton/ShareButton';

const Details = () => {
	const viewRef = useRef();
	const {loading, nightMode} = useSelector(
		(handleUserChoices) => handleUserChoices
	);
	const {goBack} = useNavigation();
	const [flavorText, setFlavorText] = useState('');
	const {pokemon} = useRoute().params;
	const dispatch = useDispatch();

	useEffect(() => {
		loadDetails();
	}, []);

	const loadDetails = async () => {
		dispatch(startLoading(true));
		const details = await getPersonalInformation(pokemon.id);
		setFlavorText(details);
		dispatch(startLoading(false));
	};

	const shareCard = async () => {
		await captureRef(viewRef, {
			format: 'png',
		}).then(async (uri) => {
			await Share.open({
				url: uri,
				message: 'Olhe que legal esse pokemon!',
			}).catch((e) => {
				console.log(e);
			});
		});
	};

	return (
		<StyledView color={theme.colors[pokemon.color]}>
			<StyleShotView ref={viewRef} color={theme.colors[pokemon.color]}>
				<StatusBar backgroundColor={theme.colors[pokemon.color]} />
				<Loading loading={loading} />
				<StyledBackground source={require('../../assets/icons/Pokeball.png')} />
				<StyledHeaderContainer activeOpacity={0.5} onPress={() => goBack()}>
					<StyledIcon source={require('../../assets/icons/arrow-left.png')} />
					<StyledName>
						{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
					</StyledName>
					<StyledId>#{('000' + pokemon.id).slice(-3)}</StyledId>
				</StyledHeaderContainer>
				<DetailsCard
					action={shareCard}
					pokemon={pokemon}
					details={flavorText}
				/>
			</StyleShotView>
		</StyledView>
	);
};

export default Details;
