import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../Home';

it('should have a heading', () => {
  render(<Home />);
  const headingElement = screen.getByRole('heading');
  expect(headingElement).toBeInTheDocument();
});
