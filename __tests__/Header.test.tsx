import React from 'react';
import { render, act, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '@/components/Header/HeaderHome';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

beforeEach(() => {
    window.scrollTo = jest.fn(); // Mock window.scrollTo
});

afterEach(() => {
    window.scrollTo.mockRestore(); // Restore window.scrollTo to its original implementation
});

describe('Header Component', () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Clear mocks before each test
    });

    it('renders without crashing', () => {
        render(<Header />);
    });

    it('toggles navbar on button click', async () => {
        const { getByLabelText, getByTestId } = render(<Header />);
        const navbarToggle = getByLabelText('Mobile Menu');

        userEvent.click(navbarToggle);

        await waitFor(() => {
            expect(getByTestId('navbarCollapse')).toHaveClass('opacity-100');
        });
    });

    it('updates sticky behavior on scroll', () => {
        const { container } = render(<Header />);
        const header = container.querySelector('header');

        act(() => {
            window.scrollTo(0, 100); // Scroll to position (0, 100)
        });

        expect(header).toHaveClass('sticky');
    });

    it('handles submenu visibility', async () => {
        const { getByText, findByTestId } = render(<Header />);
        const submenuTrigger = getByText('Submenu'); // Replace 'Submenu' with actual submenu trigger text

        userEvent.click(submenuTrigger);

        const submenu = await findByTestId('submenu'); // Adjust test selector
        expect(submenu).toBeInTheDocument();
    });

    it('navigates to the correct page on menu item click', async () => {
        const { getByText } = render(<Header />);
        const router = useRouter();

        const menuItem = getByText('About'); // Replace 'About' with actual menu item text

        userEvent.click(menuItem);

        await waitFor(() => {
            expect(router.push).toHaveBeenCalledWith('/about');
        });
    });
});
