import React from 'react';
import Helmet from 'react-helmet';

// Import components
import SubHeader from '../../components/SubHeader';
import H1 from '../../components/H1';
import P from '../../components/P';
import Container from './Container';

class AddPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Add Address - Full-stack Coding Challenge - Ambyint</title>
        </Helmet>
        <SubHeader>
          <H1>Add Address</H1>
          <P>Use the form below to add additional addresses</P>
        </SubHeader>
        <Container>
          Add Page
        </Container>
      </div>
    );
  }
}

export default AddPage;