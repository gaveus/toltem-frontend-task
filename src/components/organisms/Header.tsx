import React, { useState, useEffect } from 'react';
import { Wordmark } from '../atoms/Wordmark';
import { NavItem } from '../molecules/NavItem';
import { CartControl } from '../molecules/CartControl';
import { Button } from '../atoms/Button';
import { MobileNavDrawer } from '../molecules/MobileNavDrawer';

// ---------------------------------------------------------------------------
// Nav items shared by desktop and mobile.
// Update these when real routes are added.
// ---------------------------------------------------------------------------
export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export interface HeaderProps {
  /** Currently active route pathname (for active nav highlighting).
   *  When undefined, no item is highlighted.
   */
  readonly activePath?: string;
  /** Shopping cart item count shown in the cart indicator. */
  readonly cartCount?: number;
  /** Optional override for navigation items. Defaults to NAV_ITEMS. */
  readonly navigationItems?: Array<{ label: string; href: string }>;
}

const MOBILE_BREAKPOINT = 768;

/**
 * Toltem header organism.
 *
 * Desktop layout:
 *   [ Toltem ]  [ Home | Menu | About | Contact ]  [ Cart · Order Now ]
 *
 * Mobile layout:
 *   [ Toltem ............ ☰ ]
 *   Full-screen overlay menu (MobileNavDrawer) with:
 *     Home, Menu, About, Contact, Cart, Order Now, close control.
 *
 * ## Reusing the Button component
 *
 * The "Order Now" action uses the shared `Button` atom from
 * `../atoms/Button`. That atom is currently a placeholder provided so this
 * organism can integrate with the team's Button work early. When your teammate
 * ships the real shared Button component, point this import at the shared
 * module and delete the placeholder.
 */
export const Header: React.FunctionComponent<HeaderProps> = ({
  activePath = '',
  cartCount = 0,
  navigationItems = NAV_ITEMS,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on resize once we cross back into desktop.
  useEffect(() => {
    if (!mobileOpen) return;
    const handleResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileOpen]);



  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  const navItemsWithActive = navigationItems.map((item) => ({
    ...item,
    active: activePath === item.href,
  }));

  const mobileNavItems = [
    ...navItemsWithActive,
    { label: 'Cart', href: '/cart', active: activePath === '/cart' },
  ];

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full"
        style={{
          backgroundColor: 'var(--color-primary-dark)',
          borderBottom: '1px solid var(--color-primary-light)',
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* ---------- LEFT: Wordmark ---------- */}
          <Wordmark href="/" className="text-xl sm:text-2xl" />

          {/* ---------- DESKTOP: nav + actions ---------- */}
          <nav
            className="hidden items-center gap-1 sm:gap-2 md:flex"
            aria-label="Main navigation"
          >
            <ul className="flex items-center gap-1 sm:gap-2">
              {navItemsWithActive.map((item) => (
                <li key={item.href}>
                  <NavItem
                    label={item.label}
                    href={item.href}
                    active={item.active}
                    className={item.active
                      ? 'text-white font-medium'
                      : 'text-white/80 hover:text-white'}
                  />
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 sm:gap-4 md:flex">
            {/* Cart indicator (molecule) */}
            <CartControl itemCount={cartCount} />

            {/* Order Now — integration point for teammate's shared Button */}
            <Button
              type="button"
              variant="primary"
              className="shadow-sm hover:shadow-md"
              onClick={() => {
                // TODO: connect to real order flow when routes exist.
              }}
            >
              Order Now
            </Button>
          </div>

          {/* ---------- MOBILE: hamburger ---------- */}
          <button
            type="button"
            className="flex items-center justify-center rounded-md p-2 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-menu"
            onClick={toggleMobile}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {mobileOpen ? (
                // Close icon (X)
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                // Hamburger
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* ---------- MOBILE OVERLAY MENU (molecule) ---------- */}
      <MobileNavDrawer
        isOpen={mobileOpen}
        onClose={closeMobile}
        navigationItems={mobileNavItems}
        cartCount={cartCount}
        activeItem={activePath}
        onNavigate={() => {
          // In a real app, integrate with the router here.
          closeMobile();
        }}
      />
    </>
  );
};

export default Header;
