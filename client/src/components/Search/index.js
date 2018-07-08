import React from 'react';
import PropTypes from 'prop-types';

// Import components
import Wrapper from './Wrapper';
import Icon from './Icon';
import Input from './Input';
import ListButton from './ListButton';
import MapButton from './MapButton';

// Define the component
function Search({ activeType = 'List', query = '', onQueryChange, onTypeChange }) {
  return (
    <Wrapper>
      <Icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </Icon>
      <Input type="text" name="Search" placeholder="Enter Search Term" defaultValue={query} onChange={(input) => onQueryChange(input.target.value)} />
      <ListButton active={activeType === 'List'} onClick={() => onTypeChange('List')}>List View</ListButton>
      <MapButton active={activeType === 'Map'} onClick={() => onTypeChange('Map')}>Map View</MapButton>
    </Wrapper>
  );
}

// Define the props
Search.propTypes = {
  activeType: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  onQueryChange: PropTypes.func.isRequired,
  onTypeChange: PropTypes.func.isRequired
};

export default Search;