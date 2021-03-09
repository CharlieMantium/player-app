import React, { useState } from 'react';
import styled from 'styled-components/macro';

import Home from '../Home';
import Splash from '../Splash';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const App = () => {
  const [token, setToken] = useState('');

  return (
    <Wrapper>{token.length ? <Home token={token} /> : <Splash setToken={setToken} />}</Wrapper>
  );
};

export default App;
