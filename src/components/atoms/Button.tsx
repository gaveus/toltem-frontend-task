import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

/**
 * NOTE: This is a placeholder Button component.
 * Your teammate is responsible for implementing the full Button component.
 * For now, this provides a basic accessible button that Header and Footer can use.
 * Eventually, replace this import with the shared Button component from the team.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  disabled,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-900 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary:
      "bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800",
    secondary:
      "bg-transparent border border-purple-400 text-white hover:bg-purple-800 hover:border-purple-300",
    ghost:
      "bg-transparent text-purple-200 hover:bg-purple-800 hover:text-white",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
