import React from 'react';

import SubHeader from '../index';

describe('<SubHeader />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(
      <SubHeader>Content</SubHeader>
    ).toJSON();
    
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render its content', () => {
    const children = 'Some Content';
    const renderedComponent = shallow(
      <SubHeader>{children}</SubHeader>
    );
    
    expect(renderedComponent.contains(children)).toBe(true);
  });
});