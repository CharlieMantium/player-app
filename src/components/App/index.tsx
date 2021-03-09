import React from 'react';
import styled from 'styled-components/macro';

import Splash from '../Splash';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const App = () => {
  return (
    <Wrapper>
      <Splash />
    </Wrapper>
  );
};

export default App;
