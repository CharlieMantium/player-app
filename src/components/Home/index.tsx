import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div``;

const List = styled.div``;

interface HomeProps {
  token: string;
}

const Home: React.FC<HomeProps> = ({ token }) => {
  return (
    <Wrapper>
      <List />
    </Wrapper>
  );
};

export default Home;
