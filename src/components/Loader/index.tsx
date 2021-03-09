import React from 'react';
import Loader from 'react-loader-spinner';

import { LoaderWrapper } from './loader.styles';

const LoaderComponent = () => {
  return (
    <LoaderWrapper>
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </LoaderWrapper>
  );
};

export default LoaderComponent;
