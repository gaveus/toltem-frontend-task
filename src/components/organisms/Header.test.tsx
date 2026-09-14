import { render, screen, within, waitFor } from '@testing-library/react';
// NOTE: `within` is used in tests that scope queries to a specific container.
import userEvent from '@testing-library/user-event';
import { Header } from './Header';

describe('Header', () => {
  it('renders the Toltem wordmark as a link to home', () => {
    render(<Header />);
    const wordmark = screen.getByRole('link', { name: /Toltem/i });
    expect(wordmark).toBeInTheDocument();
    expect(wordmark).toHaveAttribute('href', '/');
  });

  it('renders desktop navigation links', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /Home/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /Menu/i })).toHaveAttribute('href', '/menu');
    expect(screen.getByRole('link', { name: /About/i })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: /Contact/i })).toHaveAttribute('href', '/contact');
  });

  it('highlights the active navigation item with stronger weight', () => {
    render(<Header activePath="/menu" />);
    const menuLink = screen.getByRole('link', { name: /Menu/i });
    // Active item is white with stronger font weight than the inactive items.
    expect(menuLink).toHaveClass('text-white');
    expect(menuLink).toHaveClass('font-medium');
  });

  it('does not highlight any item when activePath is empty', () => {
    render(<Header activePath="" />);
    const menuLinks = screen.getAllByRole('link', { name: /(Home|Menu|About|Contact)/i });
    menuLinks.forEach((link) => {
      // Inactive items use white/80, never full white.
      expect(link).toHaveClass('text-white/80');
      expect(link).not.toHaveClass('font-medium');
    });
  });

  it('shows cart indicator and Order Now button on desktop', () => {
    render(<Header />);
    expect(screen.getByRole('button', { name: /View cart/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Order Now/i })).toBeInTheDocument();
  });

  it('shows the cart item count in the cart indicator', () => {
    render(<Header cartCount={3} />);
    expect(screen.getByRole('button', { name: /View cart, 3 items/i })).toBeInTheDocument();
  });

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup();
    render(<Header />);
    const hamburger = screen.getByRole('button', { name: /Open menu/i });
    await user.click(hamburger);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    // Close button lives inside the dialog nav; query from screen for robustness.
    expect(screen.getByRole('button', { name: /Close navigation menu/i })).toBeInTheDocument();
    // Mobile nav links are visible inside the dialog — scope to the dialog to avoid
    // matching the hidden desktop nav links that are still in the DOM.
    const dialogNav = within(dialog);
    expect(dialogNav.getByRole('link', { name: /Home/i })).toBeInTheDocument();
    expect(dialogNav.getByRole('link', { name: /Menu/i })).toBeInTheDocument();
    expect(dialogNav.getByRole('link', { name: /About/i })).toBeInTheDocument();
    expect(dialogNav.getByRole('link', { name: /Contact/i })).toBeInTheDocument();
  });

  it('closes mobile menu with the close button', async () => {
    const user = userEvent.setup();
    render(<Header />);
    await user.click(screen.getByRole('button', { name: /Open menu/i }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /Close navigation menu/i }));
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
  });

  it('closes mobile menu on link click', async () => {
    const user = userEvent.setup();
    render(<Header />);
    await user.click(screen.getByRole('button', { name: /Open menu/i }));
    const dialog = screen.getByRole('dialog');
    const dialogNav = within(dialog);
    // Click the Menu link inside the mobile drawer, not the hidden desktop one.
    await user.click(dialogNav.getByRole('link', { name: /Menu/i }));
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
  });

  it('has accessible labels on hamburger and close buttons', () => {
    render(<Header />);
    const hamburger = screen.getByRole('button', { name: /Open menu/i });
    expect(hamburger).toHaveAttribute('aria-expanded', 'false');
    expect(hamburger).toHaveAttribute('aria-controls', 'mobile-navigation-menu');
  });

  it('sets aria-expanded to true when menu is open', async () => {
    const user = userEvent.setup();
    render(<Header />);
    const hamburger = screen.getByRole('button', { name: /Open menu/i });
    await user.click(hamburger);
    expect(hamburger).toHaveAttribute('aria-expanded', 'true');
  });

  it('renders the header with a semantic header element', () => {
    render(<Header />);
    expect(document.querySelector('header')).toBeInTheDocument();
  });
});
