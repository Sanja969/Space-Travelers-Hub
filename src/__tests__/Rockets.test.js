import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../Redux/store';
import Rockets from '../components/Rockets';

describe('Test Rockets render', () => {
  test('Test Rockets Snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
