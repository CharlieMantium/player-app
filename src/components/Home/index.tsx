import React, { useState } from 'react';

import List from '../List';
import { Wrapper, Header, ListChangeWrapper, Button } from './home.styles';

const Home = () => {
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
      <List listNumber={listNumber} />
    </Wrapper>
  );
};

export default Home;
