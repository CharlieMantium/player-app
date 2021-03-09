import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

interface PlayerProps {
  token: string;
  id: string;
}

const Player: React.FC<PlayerProps> = ({ id, token }) => {
  const [movieUrl, setMovieUrl] = useState({});
  const [isError, setIsError] = useState(false);

  useEffect(() => {
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
        console.log(response);
        setMovieUrl(response);
      })
      .catch((error) => {
        setIsError(error.message);
      });
  }, [token]);

  console.log(token);

  return <Wrapper>{/* <ReactPlayer url={movieUrl} /> */}</Wrapper>;
};

export default Player;
