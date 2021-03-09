import React from 'react';
import styled from 'styled-components/macro';

import List from '../List';

const Wrapper = styled.div``;

interface HomeProps {
  token: string;
}

const Home: React.FC<HomeProps> = ({ token }) => {
  return (
    <Wrapper>
      <List token={token} />
    </Wrapper>
  );
};

export default Home;
