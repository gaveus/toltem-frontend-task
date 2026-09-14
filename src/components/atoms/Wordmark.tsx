import React from 'react';

export interface WordmarkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Destination URL when the wordmark is wrapped in a link. */
  href?: string;
}

/**
 * Toltem wordmark.
 *
 * The brand logo is the word "Toltem" rendered in white.
 * This atom is reused by both the Header and Footer organisms so the
 * brand identity stays consistent across the site.
 */
export const Wordmark: React.FunctionComponent<WordmarkProps> = ({
  href,
  className,
  ...rest
}) => {
  const classes = [
    'font-heading',
    'text-white',
    'font-semibold',
    'tracking-tight',
    href ? 'hover:opacity-90 transition-opacity' : 'cursor-default select-none',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        Toltem
      </a>
    );
  }

  return (
    <span className={classes} aria-label="Toltem Restaurant" {...rest}>
      Toltem
    </span>
  );
};

export default Wordmark;
