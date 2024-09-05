import { render } from '@testing-library/react';
import { NotFoundPage } from './NotFoundPage';
import '@testing-library/jest-dom';
import React from 'react';

test('renders page with correct text', () => {
  const { getByText } = render(<NotFoundPage />);
  const buttonElement = getByText('Page not found...');
  expect(buttonElement).toBeInTheDocument();
});
