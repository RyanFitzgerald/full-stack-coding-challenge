import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 15px;

  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;

export default Container;