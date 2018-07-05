import React from 'react';

// Import components
import SubHeader from '../../components/SubHeader';
import Container from '../../components/Container';
import H1 from '../../components/H1';
import P from '../../components/P';

class SearchPage extends React.Component {
  render() {
    return (
      <div>
        <SubHeader>
          <H1>Address Search</H1>
          <P>Use the search form below to look up addresses</P>
        </SubHeader>
        <Container>
          Search Page
        </Container>
      </div>
    );
  }
}

export default SearchPage;