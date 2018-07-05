import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

// Import global styles and normalize
import './globalStyles';

ReactDOM.render(
  <Router>
    <App/>
  </Router>, 
  document.getElementById('root')
);

registerServiceWorker();