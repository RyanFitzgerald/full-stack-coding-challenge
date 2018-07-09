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

  @media only screen and (max-width: 480px) {
    bottom: -100%;
    height: 40px;
    left: auto;
    right: 0;
    top: auto;
    width: 50%;
  }
`;

export default TypeButton;