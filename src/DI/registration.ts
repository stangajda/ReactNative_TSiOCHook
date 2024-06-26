import {IMoviesQueryResult} from '@src/interfaces/QueryInterfaces';
import {Injection} from './Injection';
import {useGetMoviesQuery} from '@src/api/apiSlice';
import {TYPES} from '@src/di/types';

export const initialRegister = () => {
  const injection = Injection.getInstance();
  injection.register<IMoviesQueryResult>(TYPES.IMoviesQueryResult, () =>
    useGetMoviesQuery({}),
  );
};
