import React from 'react';

// Import components
import SubHeader from '../../components/SubHeader';
import H1 from '../../components/H1';
import P from '../../components/P';
import Container from './Container';

class AddPage extends React.Component {
  render() {
    return (
      <div>
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