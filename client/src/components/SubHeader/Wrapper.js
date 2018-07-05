import styled from 'styled-components';

// Import static files
import BG from '../../static/bg.png';

const Wrapper = styled.div`
  background: #f5f5f5;
  background-image: url(${BG});
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 100px 0;
  text-align: center;
`;

export default Wrapper;