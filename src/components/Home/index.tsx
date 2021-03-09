import React from 'react';
import styled from 'styled-components/macro';

import List from '../List';

const Wrapper = styled.div``;

const Header = styled.h1``;

interface HomeProps {
  token: string;
}

const Home: React.FC<HomeProps> = ({ token }) => {
  return (
    <Wrapper>
      <Header>PlayerApp</Header>
      <List token={token} />
    </Wrapper>
  );
};

export default Home;
