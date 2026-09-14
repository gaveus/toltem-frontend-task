import React, { useEffect } from "react";
import { NavItem } from "./NavItem";
import { CartControl } from "./CartControl";
import { Button } from "../atoms/Button";

export interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: Array<{
    label: string;
    href: string;
    active?: boolean;
  }>;
  cartCount: number;
  activeItem?: string;
  onNavigate?: (href: string) => void;
}

export const MobileNavDrawer: React.FC<MobileNavDrawerProps> = ({
  isOpen,
  onClose,
  navigationItems,
  cartCount,
  activeItem,
  onNavigate,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const drawer = document.getElementById("mobile-navigation-menu");
      if (drawer) {
        const focusable = drawer.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (focusable && typeof (focusable as HTMLElement).focus === 'function') {
          (focusable as HTMLElement).focus();
        }
      }
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!isOpen) return;
      const drawer = document.getElementById("mobile-navigation-menu");
      if (drawer && !drawer.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <nav
        id="mobile-navigation-menu"
        className="fixed inset-x-0 bottom-0 top-0 bg-purple-900 pt-20 pb-8 px-6 overflow-y-auto"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between mb-8">
          <span className="text-sm font-medium text-purple-300 uppercase tracking-wider">
            Navigation
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 rounded-lg text-purple-200 hover:text-white hover:bg-purple-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-900 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <ul className="space-y-2" role="list">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <NavItem
                label={item.label}
                href={item.href}
                active={activeItem === item.label}
                className={activeItem === item.label
                  ? 'text-white font-medium'
                  : 'text-white/80 hover:text-white'}
                onClick={() => {
                  onNavigate?.(item.href);
                  onClose();
                }}
              />
            </li>
          ))}
        </ul>

        <div className="mt-8 pt-6 border-t border-purple-700">
          <ul className="space-y-2" role="list">
            <li>
              <NavItem
                label="Cart"
                href="/cart"
                active={activeItem === "Cart"}
                className={activeItem === "Cart"
                  ? 'text-white font-medium'
                  : 'text-white/80 hover:text-white'}
                onClick={() => {
                  onNavigate?.("/cart");
                  onClose();
                }}
              />
            </li>
            <li>
              <Button
                variant="primary"
                className="w-full mt-4 text-base py-3"
                onClick={() => {
                  onNavigate?.( "/order");
                  onClose();
                }}
              >
                Order Now
              </Button>
            </li>
          </ul>

          <div className="mt-6">
            <CartControl itemCount={cartCount} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileNavDrawer;
