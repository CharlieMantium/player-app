import axios from 'axios';

import { Movie } from '../components/List/types';

export const login = (
  setToken: (token: string) => void,
  setIsError: (isError: boolean) => void,
) => {
  axios
    .post('https://thebetter.bsgroup.eu/Authorization/SignIn', {})
    .then((response) => {
      setToken(response.data.AuthorizationToken.Token);
    })
    .catch((error) => {
      setIsError(true);
    });
};

export const getList = (
  token: string,
  listNumber: number,
  setMovies: (movies: Movie[]) => void,
  setIsError: (isError: boolean) => void,
  setIsLoading: (isLoading: boolean) => void,
) => {
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
      setIsError(true);
    });
  setIsLoading(false);
};

export const getMovie = (
  token: string,
  setMovieUrl: (url: string) => void,
  setIsError: (isError: boolean) => void,
) => {
  const url = 'https://thebetter.bsgroup.eu/Media/GetMediaPlayInfo';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
  const body = {
    MediaId: 15,
  };
  axios
    .post(url, body, { headers })
    .then((response) => {
      setMovieUrl(response.data.ContentUrl);
    })
    .catch((error) => {
      setIsError(error.message);
    });
};
