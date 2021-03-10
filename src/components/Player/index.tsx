import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

import { useToken } from '../../store';
import { getMovie } from '../../helpers';
import { Wrapper } from './player.styles';
import { PlayerProps } from './types';

const Player: React.FC<PlayerProps> = ({ id }) => {
  const [{ token }] = useToken();
  const [movieUrl, setMovieUrl] = useState({});
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getMovie(token, setMovieUrl, setIsError);
  }, [token]);

  return <Wrapper>{/* <ReactPlayer url={movieUrl} /> */}</Wrapper>;
};

export default Player;
