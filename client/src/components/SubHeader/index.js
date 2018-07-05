import React from 'react';

// Import components
import Wrapper from './Wrapper';
import Container from '../Container';

function SubHeader({children}) {
  return (
    <Wrapper>
      <Container>
        {children}
      </Container>
    </Wrapper>
  );
}

export default SubHeader;