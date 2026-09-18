import React, { useState, useEffect } from "react";

import { Wordmark } from "../atoms/Wordmark";
import { NavItem } from "../molecules/NavItem";
import { CartControl } from "../molecules/CartControl";
import { Button } from "../atoms/Button";
import { MobileNavDrawer } from "../molecules/MobileNavDrawer";

// ---------------------------------------------------------------------------
// Navigation items
// These point to sections on the current page.
// ---------------------------------------------------------------------------

export const NAV_ITEMS = [
  { label: "Home", href: "#" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export interface HeaderProps {
  /** Currently active section/hash for active nav highlighting. */
  readonly activePath?: string;

  /** Shopping cart item count shown in the cart indicator. */
  readonly cartCount?: number;

  /** Optional override for navigation items. */
  readonly navigationItems?: Array<{ label: string; href: string }>;
}

const MOBILE_BREAKPOINT = 768;

export const Header: React.FunctionComponent<HeaderProps> = ({
  activePath = "#",
  cartCount = 0,
  navigationItems = NAV_ITEMS,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu when resizing back to desktop.
  useEffect(() => {
    if (!mobileOpen) return;

    const handleResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen]);

  const toggleMobile = () => setMobileOpen((prev) => !prev);

  const closeMobile = () => setMobileOpen(false);

  const navItemsWithActive = navigationItems.map((item) => ({
    ...item,
    active: activePath === item.href,
  }));

  const mobileNavItems = [
    ...navItemsWithActive,
    {
      label: "Cart",
      href: "#cart",
      active: activePath === "#cart",
    },
  ];

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full"
        style={{
          backgroundColor: "var(--color-primary-dark)",
          borderBottom: "1px solid var(--color-primary-light)",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Wordmark */}
          <Wordmark href="#" className="text-xl sm:text-2xl" />

          {/* Desktop navigation */}
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
                    className={
                      item.active
                        ? "font-medium text-white"
                        : "text-white/80 hover:text-white"
                    }
                  />
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 sm:gap-4 md:flex">
            <CartControl itemCount={cartCount} />

            <Button
              type="button"
              variant="primary"
              className="shadow-sm hover:shadow-md"
              onClick={() => {
                // Scroll to the menu section when Order Now is clicked.
                document
                  .getElementById("menu")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Order Now
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="flex items-center justify-center rounded-md p-2 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
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
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
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

      {/* Mobile navigation */}
      <MobileNavDrawer
        isOpen={mobileOpen}
        onClose={closeMobile}
        navigationItems={mobileNavItems}
        cartCount={cartCount}
        activeItem={activePath}
        onNavigate={closeMobile}
      />
    </>
  );
};

export default Header;