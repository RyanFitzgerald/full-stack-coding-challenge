import styled from 'styled-components';

const Button = styled.button`
  background: #3498db;
  border: 0;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  display: block;
  margin: 15px auto 0;
  padding: 15px 50px;
  transition: 0.25s ease all;

  &:hover {
    background: #236c9c;
  }
`;

export default Button;