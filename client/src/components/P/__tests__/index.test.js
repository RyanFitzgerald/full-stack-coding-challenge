import React from 'react';

import P from '../index';

describe('<P />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(
      <P>Test</P>
    ).toJSON();
    
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render the correct element', () => {
    const renderedComponent = shallow(
      <P/>
    );
    
    expect(renderedComponent.type()).toEqual('p');
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <P>{children}</P>
    );
    
    expect(renderedComponent.contains(children)).toBe(true);
  });
});