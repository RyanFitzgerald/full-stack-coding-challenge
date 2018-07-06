import React from 'react';

import Table from './Table';
import Th from './Th';
import Tr from './Tr';
import Td from './Td';

function ResultTable() {
  return (
    <Table>
      <tr>
        <Th>Name</Th>
        <Th>Telephone</Th>
      </tr>
      <Tr>
        <Td>Bill Gates</Td>
        <Td>55577854</Td>
      </Tr>
      <Tr>
        <Td>Bill Gates</Td>
        <Td>55577854</Td>
      </Tr>
      <Tr>
        <Td>Bill Gates</Td>
        <Td>55577854</Td>
      </Tr>
    </Table>
  );
}

export default ResultTable;