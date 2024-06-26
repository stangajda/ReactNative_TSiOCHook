import React from 'react';
import {ActivityIndicator, SafeAreaView, View, Text} from 'react-native';
import Styles from './styles/styles';
import MovieList from './Components/MovieList';
import {Movie} from '@src/models/Movie';
import {IMoviesQueryResult} from '@src/interfaces/QueryInterfaces';

import {useDependenciesContainer} from '@src/di/container';
import {useInjectedDI} from '@src/di/Context';
import {initialEnvRegister} from '@src/di/initialEnvRegister';

function App(): React.JSX.Element {
  initialEnvRegister();

  // This approach is follow react hooks rules. https://react.dev/reference/rules/rules-of-hooks
  const deps = useInjectedDI(useDependenciesContainer());

  const {data, isLoading, isSuccess, isError, error}: IMoviesQueryResult =
    deps.moviesQueryResult();
  const movieList: Movie[] = data?.results || [];

  let content: React.JSX.Element | null;

  switch (true) {
    case isLoading:
      content = <ActivityIndicator />;
      break;
    case isSuccess:
      content = <MovieList movieList={movieList} />;
      break;
    case isError:
      content = <Text>{error?.toString()}</Text>;
      break;
    default:
      content = null;
  }

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <View style={Styles.container}>{content}</View>
    </SafeAreaView>
  );
}

export default App;
