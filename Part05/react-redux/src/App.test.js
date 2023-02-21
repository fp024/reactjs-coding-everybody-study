import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const rootH1 = screen.getByText(/Root/i);
  expect(rootH1).toBeInTheDocument();
});
