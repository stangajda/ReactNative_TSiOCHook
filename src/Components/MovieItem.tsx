// MovieItem.tsx
import React, {memo, useMemo} from 'react';
import {View, Image} from 'react-native';
import {movieApiPaths} from '@src/utils/helper';
import Styles from '@src/styles/styles';
import {MovieItemProps} from '@src/types/MovieItem';
import MovieContent from './MovieContent';

const MovieItem = memo(({movie}: MovieItemProps) => {
  const imageUrl = useMemo(
    () => `${movieApiPaths.movieImageUrl()}${movie.poster_path}`,
    [movie.poster_path],
  );

  return (
    <View style={Styles.listItem}>
      <Image source={{uri: imageUrl}} style={Styles.image} />
      <View style={Styles.rightItemContainer}>
        <MovieContent movie={movie} />
      </View>
    </View>
  );
});

export default MovieItem;
