import React from 'react';
import { StaticRouter } from 'react-router-dom';

import Header from '../index';

describe('<Header />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(
      <StaticRouter location="/">
        <Header/>
      </StaticRouter>
    ).toJSON();
    
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should contain navigation', () => {
    const renderedComponent = mount(
      <StaticRouter location="/">
        <Header/>
      </StaticRouter>
    );
    
    expect(renderedComponent.find('nav')).toHaveLength(1);
  });
});