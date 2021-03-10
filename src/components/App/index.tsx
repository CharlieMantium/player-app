import React, { useState } from 'react';

import { useToken } from '../../store';
import { Wrapper } from './app.styles';
import Home from '../Home';
import Splash from '../Splash';
import Error from '../Error';

const App = () => {
  const [{ token }] = useToken();
  const [isError, setIsError] = useState(false);

  return (
    <Wrapper>
      {token.length && !isError ? <Home /> : <Splash setIsError={setIsError} />}
      {isError && <Error />}
    </Wrapper>
  );
};

export default App;
