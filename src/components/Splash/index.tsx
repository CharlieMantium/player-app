import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';
import { rem } from 'polished';

import { colors } from '../../styles/base';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 0 0 ${rem(20)} 0;
`;

const Logo = styled.h1``;

const Button = styled.button`
  padding: ${rem(10)} ${rem(50)};
  border: ${rem(3)} solid ${colors.alpha};
  border-radius: ${rem(5)};
  background-color: ${colors.beta};
`;

interface SplashProps {
  setToken: (token: string) => void;
  setIsError: (isError: boolean) => void;
}

const Splash: React.FC<SplashProps> = ({ setToken, setIsError }) => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleButtonClick = () => {
    setIsLoggingIn(true);
  };

  useEffect(() => {
    const login = () => {
      axios
        .post('https://thebetter.bsgroup.eu/Authorization/SignIn', {})
        .then((response) => {
          setToken(response.data.AuthorizationToken.Token);
        })
        .catch((error) => {
          setIsError(error.message);
        });
    };
    if (isLoggingIn) {
      login();
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
