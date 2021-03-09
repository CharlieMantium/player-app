import React from 'react';
import styled from 'styled-components/macro';
import { rem } from 'polished';

import { colors } from '../../styles/base';

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

const Image = styled.img`
  width: 100%;
`;

interface ListItemProps {
  title: string;
  image: string;
}

const ListItem: React.FC<ListItemProps> = ({ title, image }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Image src={image} alt={`${title} movie cover`} />
    </Wrapper>
  );
};

export default ListItem;
