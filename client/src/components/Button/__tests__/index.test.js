import React from 'react';

import Button from '../index';

describe('<Button />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(
      <Button>Test</Button>
    ).toJSON();
    
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render the correct element', () => {
    const renderedComponent = shallow(
      <Button/>
    );
    
    expect(renderedComponent.type()).toEqual('button');
  });

  it('should render its content', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <Button>{children}</Button>
    );
    
    expect(renderedComponent.contains(children)).toBe(true);
  });
});