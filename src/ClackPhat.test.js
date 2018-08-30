import React from 'react';
import ReactDOM from 'react-dom';
import ClackPhat from './ClackPhat';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClackPhat />, div);
  ReactDOM.unmountComponentAtNode(div);
});
