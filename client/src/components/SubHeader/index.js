import React from 'react';
import PropTypes from 'prop-types';

// Import components
import Wrapper from './Wrapper';
import Container from '../Container';

// Define the component
function SubHeader({children}) {
  return (
    <Wrapper>
      <Container>
        {children}
      </Container>
    </Wrapper>
  );
}

// Define the props
SubHeader.propTypes = {
  children: PropTypes.element.isRequired
}

export default SubHeader;