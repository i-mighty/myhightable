import React from 'react';
import { render } from '@testing-library/react-native';
import App from './App';

test('It renders successfully', async () => {
  const { getByTestId, baseElement } = render(<App />);

  expect(getByTestId('title').children.join('')).toBe('HighTable');
  expect(baseElement).toMatchSnapshot();
});
