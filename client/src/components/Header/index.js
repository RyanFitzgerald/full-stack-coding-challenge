import React from 'react';
import { Link } from 'react-router-dom';

// Import static files
import Logo from '../../static/logo.png';

// Import components
import Wrapper from './Wrapper';
import LogoWrapper from './LogoWrapper';
import NavWrapper from './NavWrapper';
import Container from '../Container';
import Nav from '../Nav';

function Header() {
  return (
    <Wrapper>
      <Container>
        <LogoWrapper>
          <Link to="/">
            <img src={Logo} alt="Address Lookup"/>
          </Link>
        </LogoWrapper>
        <NavWrapper>
          <Nav/>
        </NavWrapper>
      </Container>
    </Wrapper>
  );
}

export default Header;