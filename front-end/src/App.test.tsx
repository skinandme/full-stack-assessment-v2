import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Buy Now button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Buy Now/i);
  expect(linkElement).toBeInTheDocument();
});
