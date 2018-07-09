import React from 'react';

import Upload from '../index';

describe('<Upload />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(
      <Upload type="file"/>
    ).toJSON();
    
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render the correct element', () => {
    const renderedComponent = shallow(
      <Upload type="file"/>
    );
    
    expect(renderedComponent.type()).toEqual('input');
  });
});