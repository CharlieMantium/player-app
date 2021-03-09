import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';
import { rem } from 'polished';

import { colors } from '../../styles/base';

const Wrapper = styled.div`
  padding: ${rem(240)} ${rem(20)} ${rem(80)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
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
}

const Splash: React.FC<SplashProps> = ({ setToken }) => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  useEffect(() => {
    if (isLoggingIn) {
      axios.post('https://thebetter.bsgroup.eu/Authorization/SignIn', {}).then((response) => {
        setToken(response.data.AuthorizationToken.Token);
      });
    }
  }, [isLoggingIn, setToken]);

  const handleButtonClick = () => {
    setIsLoggingIn(true);
  };

  return (
    <Wrapper>
      <Logo>PlayerApp</Logo>
      <Button onClick={handleButtonClick}>LOGIN</Button>
    </Wrapper>
  );
};

export default Splash;
