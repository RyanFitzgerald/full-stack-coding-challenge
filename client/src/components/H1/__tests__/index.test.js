import React from 'react';

import H1 from '../index';

describe('<H1 />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(
      <H1>Test</H1>
    ).toJSON();
    
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render the correct element', () => {
    const renderedComponent = shallow(
      <H1/>
    );
    
    expect(renderedComponent.type()).toEqual('h1');
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <H1>{children}</H1>
    );
    
    expect(renderedComponent.contains(children)).toBe(true);
  });
});