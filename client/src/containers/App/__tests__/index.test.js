import React from 'react';
import { StaticRouter } from 'react-router-dom';

import App from '../index';

describe('<App />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(
      <StaticRouter location="/">
        <App/>
      </StaticRouter>  
    ).toJSON();
    
    expect(renderedComponent).toMatchSnapshot();
  });
});