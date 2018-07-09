import React from 'react';

import Search from '../index';
import Input from '../Input';
import ListButton from '../ListButton';
import MapButton from '../MapButton';

describe('<Search />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(
      <Search/>
    ).toJSON();
    
    expect(renderedComponent).toMatchSnapshot();
  });

  it('input should equal the query', () => {
    const query = 'test';
    const renderedComponent = shallow(
      <Search query={query} />
    );

    expect(renderedComponent.find(Input).props().defaultValue).toBe(query);
  });

  it('list button should be active', () => {
    const renderedComponent = shallow(
      <Search/>
    );

    expect(renderedComponent.find(ListButton).props().active).toBe(true);
  });

  it('map button should be active', () => {
    const renderedComponent = shallow(
      <Search activeType="Map" />
    );

    expect(renderedComponent.find(MapButton).props().active).toBe(true);
  });
});