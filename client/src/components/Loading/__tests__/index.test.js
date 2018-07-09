import React from 'react';

import Loading from '../index';

describe('<Loading />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(
      <Loading/>
    ).toJSON();
    
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should contain loading image', () => {
    const renderedComponent = mount(
      <Loading/>
    );
    
    expect(renderedComponent.find('img')).toHaveLength(1);
  });
});