import React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

const cn = (...classes: Array<string | undefined | false>) =>
  classes.filter(Boolean).join(" ");

const baseStyles =
  "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium " +
  "transition-all duration-200 ease-in-out " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-purple-900 " +
  "disabled:cursor-not-allowed disabled:opacity-50";

const variantStyles = {
  primary:
    "bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800",

  secondary:
    "border border-purple-400 bg-transparent text-white " +
    "hover:border-purple-300 hover:bg-purple-800 active:bg-purple-700",

  ghost:
    "bg-transparent text-purple-200 " +
    "hover:bg-purple-800 hover:text-white active:bg-purple-700",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={cn(
        baseStyles,
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
