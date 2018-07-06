import React from 'react';

// Import components
import SubHeader from '../../components/SubHeader';
import H1 from '../../components/H1';
import P from '../../components/P';
import Search from '../../components/Search';
import ResultTable from '../../components/ResultTable';
import Container from './Container';

class SearchPage extends React.Component {
  render() {
    return (
      <div>
        <SubHeader>
          <H1>Address Search</H1>
          <P>Use the search form below to look up addresses</P>
          <Search/>
        </SubHeader>
        <Container>
          <ResultTable/>
        </Container>
      </div>
    );
  }
}

export default SearchPage;