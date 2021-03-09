import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components/macro';

const Wrapper = styled.div``;

const ListItem = styled.div``;

interface Movie {
  Title: string;
  Id: string;
}

interface ListProps {
  token: string;
}

const List: React.FC<ListProps> = ({ token }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const url = 'https://thebetter.bsgroup.eu/Media/GetMediaList';
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const body = {
      MediaListId: 2,
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
  }, [token]);

  return (
    <Wrapper>
      {movies && movies.map((movie: Movie) => <ListItem key={movie.Id}>{movie.Title}</ListItem>)}
    </Wrapper>
  );
};

export default List;
