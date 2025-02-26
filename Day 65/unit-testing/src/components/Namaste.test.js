import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Namaste from './Namaste';
import Greetings from './Greetings';

describe('Namaste Component', () => {
  test('renders paradise', () => {
    // Arrange
    render(<Namaste />);

    // Act

    // Assert
    const ele = screen.getByText('Paradise', {
      exact: false,
    });
    expect(ele).toBeInTheDocument();
  });

  test('renders text not change until button clicked', () => {
    // Arrange
    render(<Namaste />);

    // Act: Not Needed

    // Assert:
    const ele = screen.getByText('You are welcome to paradise!', {
      exact: false,
    });
    expect(ele).toBeInTheDocument();
  });

  test('renders text change after button clicked', () => {
    // Arrange
    render(<Namaste />);

    // Act
    const btnele = screen.getByRole('button');
    userEvent.click(btnele);

    // Assert
    const ele = screen.getByText('Changed', {
      exact: true,
    });
    expect(ele).toBeInTheDocument();
  });
});

describe('Greeting Component', () => {
  test('renders paradise', () => {
    // Arrange
    render(<Greetings />);

    // Act

    // Assert
    const ele = screen.getByText('Paradise', {
      exact: false,
    });
    expect(ele).toBeInTheDocument();
  });

  test('renders text not change until button clicked', () => {
    // Arrange
    render(<Greetings />);

    // Act: Not Needed

    // Assert:
    const ele = screen.getByText('You are welcome to paradise!', {
      exact: false,
    });
    expect(ele).toBeInTheDocument();
  });
});
