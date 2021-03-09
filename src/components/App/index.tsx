import React, { useState } from 'react';

import { Wrapper } from './app.styles';
import Home from '../Home';
import Splash from '../Splash';
import Error from '../Error';

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
