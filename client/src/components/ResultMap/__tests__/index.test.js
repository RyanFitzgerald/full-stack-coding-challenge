import React from 'react';

import ResultMap from '../index';

describe('<ResultMap />', () => {
  it('should match the snapshot', () => {
    const data = [{
      _id: '5b428620b4a1f026a4c6058b',
      city: 'Lenexa',
      country: 'United States',
      dateAdded: '2018-07-08T21:46:08.417Z',
      formattedAddress: '15481 W 110th St, Lenexa, KS 66219, USA',
      location: {
        coordinates: [-94.7655029, 38.928542],
        type: 'Point'
      },
      postalCode: '66219',
      state: 'Kansas',
      street: 'West 110th Street',
      streetNumber: '15481'
    }];

    const renderedComponent = renderer.create(
      <ResultMap data={data} />
    ).toJSON();
    
    expect(renderedComponent).toMatchSnapshot();
  });
});