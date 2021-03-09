import React, { useState, useEffect } from 'react';

import { login } from '../../helpers';
import { Wrapper, Logo, Button } from './splash.styles';
import { SplashProps } from './types';

const Splash: React.FC<SplashProps> = ({ setToken, setIsError }) => {
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
