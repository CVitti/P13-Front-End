// @ts-nocheck
import { render, screen } from '@testing-library/react';
import AppRouter from './AppRouter';

test('renders learn react link', () => {
  render(<AppRouter />);
  const linkElement = screen.getByText(/Copyright 2020 Argent Bank/i);
  expect(linkElement).toBeInTheDocument();
});
