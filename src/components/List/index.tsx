import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components/macro';

import ListItem from '../ListItem';
import Error from '../Error';

const Wrapper = styled.div``;

interface Movie {
  Title: string;
  Id: string;
  Images: { ImageTypeCode: string; Url: string }[];
}

interface ListProps {
  token: string;
  listNumber: number;
}

const List: React.FC<ListProps> = ({ token, listNumber }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getList = () => {
      setIsLoading(true);
      const url = 'https://thebetter.bsgroup.eu/Media/GetMediaList';
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      };
      const body = {
        MediaListId: listNumber,
        IncludeCategories: false,
        IncludeImages: true,
        IncludeMedia: false,
        PageNumber: 1,
        PageSize: 10,
      };
      axios
        .post(url, body, { headers })
        .then((response) => {
          setMovies(response.data.Entities);
        })
        .catch((error) => {
          setIsError(error.message);
        });
      setIsLoading(false);
    };
    getList();
  }, [token, listNumber]);

  return (
    <Wrapper>
      {isError && <Error />}
      {isLoading ? (
        <p>Loading...</p>
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
