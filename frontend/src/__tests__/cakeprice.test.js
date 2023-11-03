import { render, screen } from "@testing-library/react"
import CakeProductPage from "../pages/CakeProductPage"
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Footer from "../components/Footer";
import '@testing-library/jest-dom'

test("should render the cake page", () => {
    render(<CakeProductPage />)
    const toDoElem = screen.getByTestId("whatsapp-button")
    expect(toDoElem).toBeInTheDocument()
});

describe('Footer component', () => {
    test('renders social icons', () => {
        render(<Footer />);
        const toDoElem = screen.getByTestId("socialicons");
        expect(toDoElem).toBeInTheDocument();
    });
});