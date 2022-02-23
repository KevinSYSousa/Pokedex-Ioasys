import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getFavorite,
  removeFavorite,
  saveFavorite,
} from '../../services/favoritePokemon';

import {
  StyledContainer,
  StyledPicture,
  StyledCardContainer,
  StyledLikeContainer,
  StyledLikeButton,
  StyledLike,
  StyledTypesContainer,
  StyledCharacteristics,
  StyledMeasurementsContainer,
  StyledMeasurementsIcon,
  StyledMeasurements,
  StyledMeasurementsTitle,
  StyledSkillsContainer,
  StyledDetails,
  StyledStatsContainer,
  StyledStatsTitle,
  StyledDefaultImage,
} from './styles';
import PokemonType from '../PokemonType/PokemonType';
import Stats from '../Stats/Stats';
import theme from '../../styles/theme';
import LikeWarn from '../LikeWarn/LikeWarn';
import RemoveWarn from '../RemoveWarn/RemoveWarn';

const DetailsCard = ({ pokemon, details }) => {
  const { nightMode } = useSelector((handleUserChoices) => handleUserChoices);
  const [like, setLike] = useState();
  const [content, setContent] = useState();
  const [warn, setWarn] = useState();
  const [remove, setRemove] = useState(false);
  const limitReached = 650;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getFavorite('favorite');
    if (!data) return;
    const found = data.find((item) => item.pokemon.id === pokemon.id);
    if (found) {
      setLike(true);
    } else {
      setLike(false);
      return;
    }
  };

  const handleLike = async () => {
    setWarn(true);
    const result = await saveFavorite('favorite', { pokemon, details });
    switch (result) {
      case 'success':
        setLike(true);
        setContent('Pokemon adicionado aos favoritos');
        break;
      case 'full':
        setContent('Você já possui 12 favoritos!');
        break;
      default:
        setContent('Erro ao adicionar aos favoritos');
    }
    setTimeout(() => {
      setWarn(false);
    }, 2000);
  };

  const handleDelete = async () => {
    setRemove(false);
    const drop = await removeFavorite('favorite', pokemon.id);
    if (drop === 'success') {
      setLike(false);
      setWarn(true);
      setContent('Pokemon removido dos favoritos');
    } else {
      setWarn(true);
      setContent('Ocorreu um erro, tente novamente!');
    }
    setTimeout(() => {
      setWarn(false);
    }, 2000);
  };

  return (
    <>
      <StyledContainer>
        <LikeWarn
          title={'Aviso'}
          content={content}
          active={warn}
          nightMode={nightMode}
        />
        <RemoveWarn
          yes={handleDelete}
          no={() => {
            setRemove(false);
          }}
          title={'Aviso'}
          active={remove}
          nightMode={nightMode}
        />
        {pokemon.id >= limitReached ? (
          <StyledDefaultImage
            source={require('../../assets/icons/no-data.png')}
          />
        ) : (
          <StyledPicture
            uri={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          />
        )}
        <StyledCardContainer nightMode={nightMode}>
          <StyledLikeContainer>
            <StyledLikeButton
              onPress={() => {
                like ? setRemove(true) : handleLike();
              }}
            >
              {!like ? (
                <StyledLike source={require('../../assets/icons/heart.png')} />
              ) : (
                <StyledLike
                  source={require('../../assets/icons/favorite.png')}
                />
              )}
            </StyledLikeButton>
          </StyledLikeContainer>
          <StyledTypesContainer>
            {pokemon.types.map(({ type }) => (
              <PokemonType
                key={type.name}
                color={theme.colors[type.name]}
                type={type.name}
              />
            ))}
          </StyledTypesContainer>
          <StyledCharacteristics>
            <StyledMeasurementsContainer>
              <StyledMeasurementsIcon
                nightMode={nightMode}
                source={require('../../assets/icons/weight.png')}
              />
              <StyledMeasurements nightMode={nightMode}>
                {(pokemon.weight / 10).toString().replace('.', ',')} kg
              </StyledMeasurements>
              <StyledMeasurementsTitle>Weight</StyledMeasurementsTitle>
            </StyledMeasurementsContainer>
            <StyledMeasurementsContainer>
              <StyledMeasurementsIcon
                nightMode={nightMode}
                source={require('../../assets/icons/height.png')}
              />
              <StyledMeasurements nightMode={nightMode}>
                {(pokemon.height / 10).toString().replace('.', ',')} m
              </StyledMeasurements>
              <StyledMeasurementsTitle>Height</StyledMeasurementsTitle>
            </StyledMeasurementsContainer>
            <StyledSkillsContainer>
              <StyledMeasurements nightMode={nightMode}>
                {pokemon.abilities.length > 1
                  ? `${
                      pokemon.abilities[0].ability.name
                        .charAt(0)
                        .toUpperCase() +
                      pokemon.abilities[0].ability.name.slice(1)
                    } / ${
                      pokemon.abilities[1].ability.name
                        .charAt(0)
                        .toUpperCase() +
                      pokemon.abilities[1].ability.name.slice(1)
                    }`
                  : pokemon.abilities[0].ability.name.charAt(0).toUpperCase() +
                    pokemon.abilities[0].ability.name.slice(1)}
              </StyledMeasurements>
              <StyledMeasurementsTitle>Moves</StyledMeasurementsTitle>
            </StyledSkillsContainer>
          </StyledCharacteristics>
          <StyledCharacteristics>
            <StyledDetails numberOfLines={2} nightMode={nightMode}>
              {details.replaceAll('\n', ' ')}
            </StyledDetails>
          </StyledCharacteristics>
          <StyledStatsContainer>
            <StyledStatsTitle color={theme.colors[pokemon.color]}>
              Base Stats
            </StyledStatsTitle>
            {pokemon.stats.map((item, index) => (
              <Stats
                key={index}
                nightMode={nightMode}
                stat={item}
                color={theme.colors[pokemon.color]}
              />
            ))}
          </StyledStatsContainer>
        </StyledCardContainer>
      </StyledContainer>
    </>
  );
};

export default DetailsCard;
