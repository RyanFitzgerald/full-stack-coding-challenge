import React from 'react';

// Import static files
import Logo from '../../static/logo.png';

// Import components
import Wrapper from './Wrapper';
import LogoWrapper from './LogoWrapper';
import NavWrapper from './NavWrapper';
import Container from '../Container';

function Header() {
  return (
    <Wrapper>
      <Container>
        <LogoWrapper>
          <img src={Logo} alt="Address Lookup"/>
        </LogoWrapper>
        <NavWrapper>
          Nav
        </NavWrapper>
      </Container>
    </Wrapper>
  );
}

export default Header;