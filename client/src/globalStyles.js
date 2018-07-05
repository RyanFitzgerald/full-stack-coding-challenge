import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
 
injectGlobal`
  ${styledNormalize}
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    box-sizing: border-box;
  }

  body {
    background: #fff;
    color: #696d80;
    font-family: 'Open Sans', sans-serif;
    font-size: 1em;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;