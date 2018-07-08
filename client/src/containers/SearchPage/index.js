import React from 'react';
import Helmet from 'react-helmet';
import { toast } from 'react-toastify';
import { getRequest } from '../../utils/api';

// Import components
import Loading from '../../components/Loading';
import SubHeader from '../../components/SubHeader';
import H1 from '../../components/H1';
import H2 from '../../components/H2';
import P from '../../components/P';
import Search from '../../components/Search';
import ResultTable from '../../components/ResultTable';
import ResultMap from '../../components/ResultMap';
import Button from '../../components/Button';
import Container from './Container';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    // Bind functions
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleLoadButton = this.handleLoadButton.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.getAddresses = this.getAddresses.bind(this);
    this.renderResults = this.renderResults.bind(this);
    this.renderLoadButton = this.renderLoadButton.bind(this);

    // Initial state
    this.state = {
      type: 'List',
      query: '',
      sets: 1,
      openInfoWindow: false,
      data: false
    };
  }

  componentDidMount() {
    const { query } = this.state;
    this.getAddresses(query);
  }

  // Handle changes of the result type
  handleTypeChange(type) {
    this.setState({ type });
  }

  // Handle search input changes
  handleQueryChange(query) {
    this.getAddresses(query);
    this.setState({ query });
  }

  // Handle search input changes
  handleLoadButton() {
    this.setState((prevState) => ({
      sets: prevState.sets + 1
    }));
  }

  handleMarkerClick(id) {
    this.setState({
      openInfoWindow: id
    });
  }

  getAddresses(query) {
    getRequest(`/api/v1/addresses?q=${query}`).then(data => {
      if (typeof data === 'undefined' || data.status === 500 || data.error) {
        toast.error("An error has occured, please try again.");
        return
      }
      this.setState({ data });
    });
  }

  // Render results based on type chosen
  renderResults(type, sets, data) {
    // Destructure state
    const { openInfoWindow } = this.state;

    // If there is no data, show loading
    if (!data) {
      return (
        <Loading/>
      );
    }

    // If type is Map, render the map
    if (type === 'Map') {
      return (
        <ResultMap openInfoWindow={openInfoWindow} onMarkerClick={this.handleMarkerClick} data={data}/>
      );
    }

    // Otherwise, render the table
    return (
      <ResultTable data={data} sets={sets}/>
    );
  }

  // Render the "Load More" button if needed (i.e. more data and type 'List')
  renderLoadButton(type, sets, dataLength) {
    // Only show if not a map and you haven't reached the end
    if (type !== 'Map' && (sets * 20) <= dataLength) {
      return (
        <Button onClick={this.handleLoadButton}>Load More</Button>
      );
    }
  }

  render() {
    // Destructure State
    const { type, query, sets, data } = this.state;

    return (
      <div>
        <Helmet>
          <title>Address Search - Full-stack Coding Challenge - Ambyint</title>
        </Helmet>
        <SubHeader>
          <H1>Address Search</H1>
          <P>Use the search form below to look up addresses</P>
          <Search 
            activeType={type}
            query={query}
            onQueryChange={this.handleQueryChange}
            onTypeChange={this.handleTypeChange}
          />
        </SubHeader>
        <Container>
          <H2>{data.length} Result(s)</H2>
          {this.renderResults(type, sets, data)}
          {this.renderLoadButton(type, sets, data.length)}
        </Container>
      </div>
    );
  }
}

export default SearchPage;