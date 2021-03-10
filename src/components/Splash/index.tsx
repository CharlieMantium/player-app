import React, { useState, useEffect } from 'react';

import { useToken } from '../../store';
import { login } from '../../helpers';
import { Wrapper, Logo, Button } from './splash.styles';
import { SplashProps } from './types';

const Splash: React.FC<SplashProps> = ({ setIsError }) => {
  const [state, { setToken }] = useToken();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleButtonClick = () => {
    setIsLoggingIn(true);
  };

  useEffect(() => {
    if (isLoggingIn) {
      login(setToken, setIsError);
    }
  }, [isLoggingIn, setToken, setIsError]);

  return (
    <Wrapper>
      <Logo>PlayerApp</Logo>
      <Button onClick={handleButtonClick}>LOGIN</Button>
    </Wrapper>
  );
};

export default Splash;
