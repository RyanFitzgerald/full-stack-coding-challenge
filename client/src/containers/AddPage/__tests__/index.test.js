import React from 'react';

import AddPage from '../index';

describe('<AddPage />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(
      <AddPage/>
    ).toJSON();
    
    expect(renderedComponent).toMatchSnapshot();
  });
});