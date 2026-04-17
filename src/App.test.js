// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DriftTrade title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DriftTrade/i);
    expect(titleElement).toBeInTheDocument();
});
