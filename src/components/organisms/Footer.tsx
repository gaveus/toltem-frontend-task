import React from 'react';
import { Wordmark } from '../atoms/Wordmark';

// ---------------------------------------------------------------------------
// Footer navigation — mirrors the Header so the two organisms stay consistent.
// ---------------------------------------------------------------------------
export const FOOTER_NAV = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export interface FooterProps {
  /** Restaurant description shown under the wordmark.
   *  Replace with the real tagline when available.
   */
  readonly description?: string;
  /** Address shown in the contact section.
   *  Use a clearly identifiable placeholder until the real address is known.
   */
  readonly address?: string;
  /** Phone shown in the contact section.
   *  Use a clearly identifiable placeholder until the real phone is known.
   */
  readonly phone?: string;
  /** Email shown in the contact section.
   *  Use a clearly identifiable placeholder until the real email is known.
   */
  readonly email?: string;
}

const PLACEHOLDER_ADDRESS = 'Dome Alagbaka, Akure';
const PLACEHOLDER_PHONE = '07012345678';
const PLACEHOLDER_EMAIL = 'hello@toltem.example';
const PLACEHOLDER_DESCRIPTION =
  'A modern dining experience served with care.';

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: '#',
    ariaLabel: 'Follow us on Instagram (placeholder)',
  },
  {
    label: 'Facebook',
    href: '#',
    ariaLabel: 'Follow us on Facebook (placeholder)',
  },
  {
    label: 'X (Twitter)',
    href: '#',
    ariaLabel: 'Follow us on X / Twitter (placeholder)',
  },
] as const;

/**
 * Toltem footer organism.
 *
 * Sections:
 *  1. Brand — Toltem wordmark + short description
 *  2. Navigation — Home, Menu, About, Contact
 *  3. Contact — address / phone / email placeholders
 *  4. Social — placeholder social links
 *  5. Bottom bar — © Toltem Restaurant · All rights reserved.
 *
 * All business details are configurable props with clearly-marked
 * placeholders so real information can be swapped in later without
 * touching the component internals.
 */
export const Footer: React.FunctionComponent<FooterProps> = ({
  description = PLACEHOLDER_DESCRIPTION,
  address = PLACEHOLDER_ADDRESS,
  phone = PLACEHOLDER_PHONE,
  email = PLACEHOLDER_EMAIL,
}) => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-primary-dark)',
        borderTop: '1px solid var(--color-primary-light)',
        color: 'var(--color-white)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* ---------- BRAND ---------- */}
          <section aria-label="Toltem brand">
            <Wordmark className="text-xl sm:text-2xl" />
            <p className="mt-3 max-w-xs text-sm text-white/70">
              {description}
            </p>
          </section>

          {/* ---------- NAVIGATION ---------- */}
          <section aria-label="Footer navigation">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Explore
            </h2>
            <ul className="mt-4 space-y-2">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* ---------- CONTACT ---------- */}
          <section aria-label="Contact information">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Contact
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-white/50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{address}</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 shrink-0 text-white/50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 shrink-0 text-white/50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a
                  href={`mailto:${email}`}
                  className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                >
                  {email}
                </a>
              </li>
            </ul>
          </section>

          {/* ---------- SOCIAL ---------- */}
          <section aria-label="Social media links">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Follow Us
            </h2>
            <ul className="mt-4 flex gap-3">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-label={link.ariaLabel}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white/40 hover:text-white focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                  >
                    {/* Placeholder icon — swap for real brand icons when available */}
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12h8" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* ---------- BOTTOM BAR ---------- */}
        <div
          className="mt-10 border-t pt-6 text-center text-xs text-white/50 sm:text-left"
          style={{ borderColor: 'var(--color-primary-light)' }}
        >
          <p className="text-white/50">
            © {new Date().getFullYear()} Toltem Restaurant. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
