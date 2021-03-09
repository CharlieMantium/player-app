import React from 'react';
import styled from 'styled-components/macro';
import Loader from 'react-loader-spinner';
import { rem } from 'polished';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${rem(100)} 0 0 0;
  width: 100%;
`;

const LoaderComponent = () => {
  return (
    <LoaderWrapper>
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </LoaderWrapper>
  );
};

export default LoaderComponent;
