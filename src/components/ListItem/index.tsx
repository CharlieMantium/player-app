import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { rem } from 'polished';

import { colors } from '../../styles/base';

import Player from '../Player';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: ${rem(5)} 0;
`;

const Title = styled.h3`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: ${rem(10)};
  padding: ${rem(5)} ${rem(10)};
  border: ${rem(2)} solid ${colors.delta};
  border-radius: ${rem(5)};
  background-color: ${colors.alpha};
`;

const Button = styled.button``;

const Image = styled.img`
  width: 100%;
`;

interface ListItemProps {
  title: string;
  id: string;
  image: string;
  token: string;
}

const ListItem: React.FC<ListItemProps> = ({ title, image, id, token }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleButtonClick = () => {
    setIsPlaying(true);
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Button onClick={handleButtonClick}>
        <Image src={image} alt={`${title} movie cover`} />
      </Button>
      {isPlaying && <Player id={id} token={token} />}
    </Wrapper>
  );
};

export default ListItem;
