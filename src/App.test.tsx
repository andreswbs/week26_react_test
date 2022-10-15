import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('ul list is rendered', () => {
  render(<App />);
  const listElement = screen.getByRole('list');
  expect(listElement).toBeInTheDocument();
});

test('ul list is hidden after click on toggle', () => {
  render(<App />);
  const button = screen.getByRole('button')
  fireEvent.click(button)
  expect(screen.queryByRole('list')).not.toBeInTheDocument();
  fireEvent.click(button)
  expect(screen.getByRole('list')).toBeInTheDocument();
});
