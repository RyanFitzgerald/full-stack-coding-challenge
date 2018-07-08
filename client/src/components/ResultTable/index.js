import React from 'react';
import PropTypes from 'prop-types';

// Import components
import Wrapper from './Wrapper';
import Table from './Table';
import Th from './Th';
import Tr from './Tr';
import Td from './Td';

// Render rows for provided addresses
function renderRow(address, key) {
  return (
    <Tr key={key}>
      <Td>{address.streetNumber}</Td>
      <Td>{address.street}</Td>
      <Td>{address.city}</Td>
      <Td>{address.state}</Td>
      <Td>{address.country}</Td>
      <Td>{address.postalCode}</Td>
    </Tr>
  )
}

// Define the component
function ResultTable({ sets = 1, data }) {
  // Show data in groups of 20 for lists
  const displayData = data.slice(0, sets * 20);

  return (
    <Wrapper>
      <Table>
        <thead>
          <tr>
            <Th>Street #</Th>
            <Th>Street</Th>
            <Th>City</Th>
            <Th>State</Th>
            <Th>Country</Th>
            <Th>Zip Code</Th>
          </tr>
        </thead>
        <tbody>
          {displayData.map((address, key) => renderRow(address, key))}
        </tbody>
      </Table>
    </Wrapper>
  );
}

// Define the props
ResultTable.propTypes = {
  sets: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired
};

export default ResultTable;