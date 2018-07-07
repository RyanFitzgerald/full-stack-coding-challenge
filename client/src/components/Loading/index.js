import React from 'react';

import LoadingGif from '../../static/loading.gif';
import Wrapper from './Wrapper';

function Loading() {
  return (
    <Wrapper>
      <img src={LoadingGif} alt="Loading"/>
    </Wrapper>
  );
}

export default Loading;