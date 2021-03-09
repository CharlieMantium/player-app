import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Error = () => {
  return (
    <Wrapper>
      <p>Oops! Something went wrong</p>
    </Wrapper>
  );
};

export default Error;
