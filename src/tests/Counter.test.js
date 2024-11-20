import {render, screen, fireEvent} from '@testing-library/react'
import Counter from '../components/Counter'

beforeEach(() => {
  render(<Counter />)
})

test('renders counter message', () => {
  expect(screen.getByRole("button", { name: "+" })).toBeInTheDocument()
  expect(screen.getByRole("button", { name: "-" })).toBeInTheDocument()
});

test('should render initial count with value of 0', () => {
  expect(screen.getByTestId('count')).toHaveTextContent('0')
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByRole("button", { name: "+" });
  fireEvent.click(incrementButton);
  expect(screen.getByTestId("count")).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByRole("button", { name: "-" });
  fireEvent.click(decrementButton);
  expect(screen.getByTestId("count")).toHaveTextContent("-1");
});
