import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import getPokemonData from '../../services/getPokemonData';
import getSearchPokemon from '../../services/getSearchPokemon';

import { searchAction, startLoading } from '../../store/slices/user';
import {
  StyledView,
  StyledContainer,
  StyledFlatList,
  StyledIndicatorContainer,
  StyledFooterIcon,
  StyledEmptyContainer,
  StyledEmptyTitle,
  StyledEmptySubtitle,
  StyledIndicator,
  StyledButton,
  StyledSearchImage,
} from './styles';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Loading from '../../components/Loading/Loading';
import HintSearch from '../../components/HintSearch/HintSearch';

const Home = () => {
  const { nightMode, loading, search } = useSelector(
    (handleUserChoices) => handleUserChoices
  );
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);
  const [text, setText] = useState('');
  const [warn, setWarn] = useState(false);
  const dispatch = useDispatch();
  const add = 30;

  useEffect(() => {
    loadData(page);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setWarn(false);
    }, 3000);
  }, [warn]);

  const loadData = async (page) => {
    if (loading) return;
    dispatch(startLoading(true));
    const result = await getPokemonData(page);
    setPokemon([...pokemon, ...result]);
    setPage(page + add);
    dispatch(startLoading(false));
  };

  const searchData = async () => {
    setText();
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (text === '' || specialChars.test(text) || !text) {
      setWarn(true);
      return;
    }
    dispatch(searchAction(true));
    dispatch(startLoading(true));
    setPokemon([]);
    setPage(0);
    const search = await getSearchPokemon(text.toLowerCase());
    if (search === 'error') {
      setPokemon([]);
    } else {
      setPokemon([search]);
    }
    dispatch(startLoading(false));
  };

  const clearValues = () => {
    pokemon.shift();
    dispatch(searchAction(false));
    loadData(0);
  };

  return (
    <StyledView nightMode={nightMode}>
      <Loading loading={loading} />
      <StyledContainer>
        <Header title={'ioasys pokédex'} nightMode={nightMode} />
        <HintSearch active={warn} nightMode={nightMode} />
        <SearchBar
          value={text}
          onChangeText={(text) => setText(text.replace(/\s+/i, ''))}
          onSubmitEditing={searchData}
          nightMode={nightMode}
          rightComponent={
            <StyledButton
              onPress={() => {
                search ? clearValues() : searchData();
              }}
            >
              {search ? (
                <StyledSearchImage
                  source={require('../../assets/icons/close.png')}
                />
              ) : (
                <StyledSearchImage
                  source={require('../../assets/icons/find.png')}
                />
              )}
            </StyledButton>
          }
        />
        <StyledFlatList
          data={pokemon}
          keyExtractor={(item) => String(item.id)}
          onEndReached={() => {
            if (!search) {
              loadData(page);
            }
          }}
          ListEmptyComponent={
            <>
              {!loading ? (
                <StyledEmptyContainer>
                  <StyledEmptyTitle>Ops</StyledEmptyTitle>
                  <StyledEmptySubtitle>
                    Este pokemon não está aqui ;(
                  </StyledEmptySubtitle>
                </StyledEmptyContainer>
              ) : (
                <StyledIndicatorContainer>
                  <StyledIndicator />
                </StyledIndicatorContainer>
              )}
            </>
          }
          ListFooterComponent={
            <>
              {!search && (
                <StyledIndicatorContainer>
                  <StyledFooterIcon
                    source={require('../../assets/icons/footer.png')}
                  />
                </StyledIndicatorContainer>
              )}
            </>
          }
          renderItem={({ item }) => <PokemonCard pokemon={item} />}
        />
      </StyledContainer>
    </StyledView>
  );
};

export default Home;
