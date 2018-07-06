import styled from 'styled-components';

const TypeButton = styled.button`
  background: ${props => props.active ? '#e5e5e5' : '#fafafa'};
  border: 1px solid #e6e6e6;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  bottom: 0;
  color: #696d80;
  cursor: pointer;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.25s ease all;
  width: 100px;

  &:hover {
    background: #e5e5e5;
  }
`;

export default TypeButton;