import React from 'react';

import Wrapper from './Wrapper';
import Table from './Table';
import Th from './Th';
import Tr from './Tr';
import Td from './Td';

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

function ResultTable({ sets, data }) {
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

export default ResultTable;