import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { rem } from 'polished';

import Home from '../Home';
import Splash from '../Splash';
import Error from '../Error';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${rem(20)};
`;

const App = () => {
  const [token, setToken] = useState('');
  const [isError, setIsError] = useState(false);

  return (
    <Wrapper>
      {token.length && !isError ? (
        <Home token={token} />
      ) : (
        <Splash setToken={setToken} setIsError={setIsError} />
      )}
      {isError && <Error />}
    </Wrapper>
  );
};

export default App;
