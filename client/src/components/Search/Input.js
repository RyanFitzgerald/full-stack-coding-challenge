import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  box-shadow: 0 1px 10px rgba(67, 66, 97, 0.5);
  outline: none;
  padding: 15px 15px 15px 50px;
  width: 100%;

  @media only screen and (max-width: 480px) {
    padding-right: 15px;
  }
`;

export default Input;