import React from 'react';
import { StaticRouter } from 'react-router-dom';

import Nav from '../index';

describe('<Nav />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(
      <StaticRouter location="/">
        <Nav/>
      </StaticRouter>
    ).toJSON();
    
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should contain 2 links', () => {
    const renderedComponent = mount(
      <StaticRouter location="/">
        <Nav/>
      </StaticRouter>
    );
    
    expect(renderedComponent.find('Link')).toHaveLength(2);
  });
});