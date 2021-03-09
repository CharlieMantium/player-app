import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { rem } from 'polished';

import { colors } from '../../styles/base';

import List from '../List';

const Wrapper = styled.div``;

const Header = styled.h1``;

const ListChangeWrapper = styled.div`
  display: flex;
  justify-content: stretch;
  margin: ${rem(10)} 0;
`;

const Button = styled.button`
  margin: 0 ${rem(5)};
  padding: ${rem(10)};
  flex: 1;
  border: ${rem(3)} solid ${colors.alpha};
  border-radius: ${rem(5)};
  background-color: ${colors.beta};
`;

interface HomeProps {
  token: string;
}

const Home: React.FC<HomeProps> = ({ token }) => {
  const [listNumber, setListNumber] = useState(2);

  const handlePreviousListClick = () => {
    setListNumber((prev) => Math.max(prev - 1, 2));
  };

  const handleNextListClick = () => {
    setListNumber((prev) => Math.min(prev + 1, 7));
  };

  return (
    <Wrapper>
      <Header>PlayerApp</Header>
      <ListChangeWrapper>
        <Button onClick={handlePreviousListClick}>Previous List</Button>
        <Button onClick={handleNextListClick}>Next List</Button>
      </ListChangeWrapper>
      <List token={token} listNumber={listNumber} />
    </Wrapper>
  );
};

export default Home;
