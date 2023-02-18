import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page', () => {
  render(<App />);
  const rootDiv = screen.getByText(/Hello World/i);
  expect(rootDiv).toBeInTheDocument();
});
