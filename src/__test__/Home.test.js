import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import the jest-dom extension
import Home from '../components/Home';

describe('Home', () => {
  test('should display the Home component', () => {
    render(
      <Home />,
    );
    expect(screen.getByText('Welcome To Our Page')).toBeInTheDocument();
  });
});
