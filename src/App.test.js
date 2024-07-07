import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('checks if BookingForm is there', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /reservations/i });
  fireEvent.click(linkElement);
  const bookingForm = screen.getByTestId('booking-form');
  expect(bookingForm).toBeInTheDocument();
});

test('checks if BookingForm can be submitted with proper data', async () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /Reservations/i });
  fireEvent.click(linkElement);
  const consoleSpy = jest.spyOn(console, 'log');

  fireEvent.change(screen.getByLabelText(/Choose date/i), {
    target: { value: '2025-11-11' },
  });
  fireEvent.change(screen.getByLabelText(/Choose time/i), {
    target: { value: '17:00' },
  });
  fireEvent.change(screen.getByLabelText(/Guests/i), {
    target: { value: '4' },
  });
  fireEvent.submit(screen.getByTestId('booking-form'));

  expect(consoleSpy).toHaveBeenCalledWith('Reservation confirmed');

  consoleSpy.mockRestore();
});

test('checks if BookingForm can be submitted with a past date', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /Reservations/i });
  fireEvent.click(linkElement);

  fireEvent.change(screen.getByLabelText(/Choose date/i), {
    target: { value: '2023-04-22' },
  });
  fireEvent.change(screen.getByLabelText(/Choose time/i), {
    target: { value: '17:00' },
  });
  fireEvent.change(screen.getByLabelText(/Guests/i), {
    target: { value: 4 },
  });
  const button = screen.getByText('Make Your reservation');
  expect(button).toBeDisabled();
});


test('checks if BookingForm can be submitted with too many guests', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /Reservations/i });
  fireEvent.click(linkElement);

  fireEvent.change(screen.getByLabelText(/Choose date/i), {
    target: { value: '2025-04-22' },
  });
  fireEvent.change(screen.getByLabelText(/Choose time/i), {
    target: { value: '17:00' },
  });
  fireEvent.change(screen.getByLabelText(/Guests/i), {
    target: { value: 11 },
  });
  const button = screen.getByText('Make Your reservation');
  expect(button).toBeDisabled();
});