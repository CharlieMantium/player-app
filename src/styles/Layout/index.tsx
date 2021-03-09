import React from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';
import { Normalize } from 'styled-normalize';

import { colors } from '../base';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  };

  body {
    background-color: ${colors.epsilon};
    font-family: 'Open Sans', sans-serif;
  };

  *, *::before, *::after {
    box-sizing: inherit;
  };
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Layout: React.FC = ({ children }) => (
  <>
    <Normalize />
    <GlobalStyle />
    <StyledWrapper>{children}</StyledWrapper>
  </>
);

export default Layout;
