import React from 'react';

import SearchPage from '../index';
import Loading from '../../../components/Loading';
import ResultTable from '../../../components/ResultTable';
import ResultMap from '../../../components/ResultMap';

describe('<SearchPage />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(
      <SearchPage/>
    ).toJSON();
    
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render the loading component', () => {
    const renderedComponent = mount(
      <SearchPage/>
    );

    expect(renderedComponent.find(Loading).length).toEqual(1);
  });

  it('should render the result table', () => {
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

    const renderedComponent = mount(
      <SearchPage/>
    );

    renderedComponent.setState({ data });

    expect(renderedComponent.find(ResultTable).length).toEqual(1);
  });

  it('should render the result map', () => {
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

    const renderedComponent = shallow(
      <SearchPage/>
    );

    renderedComponent.setState({ data, type: 'Map' });
    
    expect(renderedComponent.find(ResultMap).length).toEqual(1);
  });
});