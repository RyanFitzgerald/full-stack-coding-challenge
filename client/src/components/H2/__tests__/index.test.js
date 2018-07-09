import React from 'react';

import H2 from '../index';

describe('<H2 />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(
      <H2>Test</H2>
    ).toJSON();
    
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render the correct element', () => {
    const renderedComponent = shallow(
      <H2/>
    );
    
    expect(renderedComponent.type()).toEqual('h2');
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <H2>{children}</H2>
    );
    
    expect(renderedComponent.contains(children)).toBe(true);
  });
});