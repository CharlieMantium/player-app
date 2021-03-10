import React, { useState } from 'react';

import Player from '../Player';
import { Wrapper, Title, Button, Image, NoImage } from './listItem.styles';
import { ListItemProps } from './types';

const ListItem: React.FC<ListItemProps> = ({ title, image, id }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleButtonClick = () => {
    setIsPlaying(true);
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Button onClick={handleButtonClick}>
        {image ? (
          <Image src={image} alt={`${title} movie cover`} />
        ) : (
          <NoImage>Oops! No image</NoImage>
        )}
      </Button>
      {isPlaying && <Player id={id} />}
    </Wrapper>
  );
};

export default ListItem;
