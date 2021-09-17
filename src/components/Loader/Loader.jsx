import Loader from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

import React from 'react';

const Spinner = () => {
  return (
    <LoaderContainer>
      <Loader
        type="Puff"
        color="#3F51B5"
        height={100}
        width={100}
        timeout={3000}
      />
    </LoaderContainer>
  );
};

export default Spinner;
