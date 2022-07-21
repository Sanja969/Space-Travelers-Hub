import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../Redux/store';
import Missions from '../components/Missions';

describe('Test Missions render', () => {
  test('Test Missions snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
