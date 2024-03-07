import React, {FC, memo, useCallback} from 'react';
import {MOVIE_API_CONFIG} from '../config';

import {FlatList, View, Image} from 'react-native';

import Styles from './styles';
import {Movie} from '../model';
import MovieContent from './MovieContent';

type Props = {
  movieList: Movie[];
};

type MovieItem = {
  item: Movie;
};

const MovieList: FC<Props> = ({movieList}) => {
  const renderItem = useCallback(
    ({item}: MovieItem) => (
      <View style={Styles.listItem} key={item.id}>
        <Image
          source={{
            uri: `${MOVIE_API_CONFIG.movieImageUrl()}${item.poster_path}`,
          }}
          style={Styles.image}
        />
        <View style={Styles.rightItemContainer}>
          <MovieContent movie={item} />
        </View>
      </View>
    ),
    [],
  );

  return <FlatList data={movieList} renderItem={renderItem} />;
};

export default memo(MovieList);