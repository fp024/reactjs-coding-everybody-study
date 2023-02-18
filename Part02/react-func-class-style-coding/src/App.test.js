import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page', () => {
  render(<App />);
  const app = screen.getByText(/Hello World/i);
  expect(app).toBeInTheDocument();

  const funcComponent = screen.getByText(/function style component/i);
  expect(funcComponent).toBeInTheDocument();

  const classComponent = screen.getByText(/class style component/i);
  expect(classComponent).toBeInTheDocument();
});
