import { describe, it } from 'vitest';
import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('Renders application', () => {
    render(<App />);
  });
});
