import React, { useEffect, useState } from 'react';

import { getList } from '../../helpers/index';
import ListItem from '../ListItem';
import LoaderComponent from '../Loader';
import Error from '../Error';
import { Wrapper } from './list.styles';
import { ListProps, Movie } from './types';

const List: React.FC<ListProps> = ({ token, listNumber }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getList(token, listNumber, setMovies, setIsError, setIsLoading);
  }, [token, listNumber]);

  return (
    <Wrapper>
      {isError && <Error />}
      {isLoading ? (
        <LoaderComponent />
      ) : (
        movies.map((movie: Movie) => (
          <ListItem
            key={movie.Id}
            id={movie.Id}
            title={movie.Title}
            image={movie.Images.filter((image) => image.ImageTypeCode === 'FRAME')[0]?.Url}
            token={token}
          />
        ))
      )}
    </Wrapper>
  );
};

export default List;
