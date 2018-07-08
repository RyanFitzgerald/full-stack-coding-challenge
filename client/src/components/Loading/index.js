import React from 'react';

// Import static files
import LoadingGif from '../../static/loading.gif';

// Import components
import Wrapper from './Wrapper';

// Define the component
function Loading() {
  return (
    <Wrapper>
      <img src={LoadingGif} alt="Loading"/>
    </Wrapper>
  );
}

export default Loading;