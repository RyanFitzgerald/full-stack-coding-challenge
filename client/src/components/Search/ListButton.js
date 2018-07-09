import styled from 'styled-components';
import MapButton from './MapButton';

const TypeButton = styled(MapButton)`
  border-bottom-right-radius: 0;
  border-right: 0;
  border-top-right-radius: 0;
  right: 100px;

  @media only screen and (max-width: 480px) {
    left: 0;
    right: auto;
  }
`;

export default TypeButton;