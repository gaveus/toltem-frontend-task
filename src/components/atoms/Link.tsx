import React from "react";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  children,
  className = "",
  active = false,
  ...props
}) => {
  return (
    <a
      {...props}
      className={`transition-colors hover:text-purple-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-900 ${
        active ? "text-purple-200 font-medium" : "text-purple-100"
      } ${className}`}
    >
      {children}
    </a>
  );
};

export default Link;
