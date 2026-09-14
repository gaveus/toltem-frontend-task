import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders the Toltem wordmark in the footer', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /Toltem/i })).toBeInTheDocument();
  });

  it('renders footer navigation links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /Home/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /Menu/i })).toHaveAttribute('href', '/menu');
    expect(screen.getByRole('link', { name: /About/i })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: /Contact/i })).toHaveAttribute('href', '/contact');
  });

  it('renders contact placeholders by default', () => {
    render(<Footer />);
    expect(screen.getByText('Dome Alagbaka, Akure')).toBeInTheDocument();
    expect(screen.getByText('07012345678')).toBeInTheDocument();
    expect(screen.getByText('hello@toltem.example')).toBeInTheDocument();
  });

  it('uses custom contact info when provided', () => {
    render(
      <Footer
        address="456 Food Avenue"
        phone="08012345678"
        email="reservations@toltem.example"
      />
    );
    expect(screen.getByText('456 Food Avenue')).toBeInTheDocument();
    expect(screen.getByText('08012345678')).toBeInTheDocument();
    expect(screen.getByText('reservations@toltem.example')).toBeInTheDocument();
  });

  it('renders email as a mailto link', () => {
    render(<Footer email="hello@toltem.example" />);
    const emailLink = screen.getByRole('link', { name: /hello@toltem.example/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:hello@toltem.example');
  });

  it('shows placeholder social links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /Follow us on Instagram/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Follow us on Facebook/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Follow us on X/i })).toBeInTheDocument();
  });

  it('renders the copyright line', () => {
    render(<Footer />);
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
  });

  it('renders a semantic footer element', () => {
    render(<Footer />);
    expect(document.querySelector('footer')).toBeInTheDocument();
  });

  it('renders the default description when no description prop is passed', () => {
    render(<Footer />);
    expect(screen.getByText('A modern dining experience served with care.')).toBeInTheDocument();
  });

  it('renders custom description when provided', () => {
    render(<Footer description="Farm-to-table dishes crafted daily." />);
    expect(screen.getByText('Farm-to-table dishes crafted daily.')).toBeInTheDocument();
  });
});
