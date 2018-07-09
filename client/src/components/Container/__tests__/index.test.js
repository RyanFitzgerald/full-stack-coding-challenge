import React from 'react';

import Container from '../index';

describe('<Container />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(
      <Container>Test</Container>
    ).toJSON();
    
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render the correct element', () => {
    const renderedComponent = shallow(
      <Container/>
    );
    
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should render its content', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <Container>{children}</Container>
    );
    
    expect(renderedComponent.contains(children)).toBe(true);
  });
});