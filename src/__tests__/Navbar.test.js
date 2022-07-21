import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/Navbar';

describe('Test Navbar render', () => {
  it('Test Navbar snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <NavBar />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
