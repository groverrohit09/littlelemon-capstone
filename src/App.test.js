import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import HomePage from './HomePage';

describe(("Booking Form"), () => {
  test('Renders the Booking form', () => {
    render(<BookingForm />);
    const reservationTimeLabel = screen.getByText("Choose date");
    expect(reservationTimeLabel).toBeInTheDocument();
  });
});


describe(("Booking Page"), () => {
  test("Initialize times", () => {
    render(<HomePage />);
    const btn = screen.getByLabelText("Reserve a Table");
    fireEvent.click(btn);
    expect(screen.getByText("Choose time")).toBeInTheDocument();
    expect(screen.getAllByTestId("res-time")).toBeTruthy();
  });
});