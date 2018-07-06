import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const Link = styled(RouterLink)`
  border-radius: 4px;
  color: #696d80;
  display: inline-block;
  font-weight: 700;
  padding: 15px;
  text-decoration: none;
  transition: 0.25s ease all;

  &:hover {
    background: #f2f2f2;
    color: #3498db;
  }
`;

export default Link;