import React from "react";

export interface CartControlProps {
  itemCount: number;
  className?: string;
}

export const CartControl: React.FC<CartControlProps> = ({
  itemCount,
  className = "",
}) => {
  return (
    <div
      className={`flex items-center gap-2 ${className}`}
      aria-label={`Cart with ${itemCount} item${itemCount !== 1 ? "s" : ""}`}
    >
      <button
        type="button"
        className="relative p-2 rounded-lg text-purple-100 hover:text-white hover:bg-purple-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-900 transition-colors"
        aria-label={`View cart, ${itemCount} item${itemCount !== 1 ? "s" : ""}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M3 1a1 1 0 000 2h11a1 1 0 100-2H3z" />
          <path
            fillRule="evenodd"
            d="M3 1a1 1 0 000 2h11a1 1 0 100-2H3zM3 1h11a1 1 0 011 1v1a1 1 0 100 2h-1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V2a1 1 0 011-1zM7 1a1 1 0 100 2h1a1 1 0 100-2H7z"
            clipRule="evenodd"
          />
          <path d="M9 3a1 1 0 000 2h1a1 1 0 100-2H9z" />
          <path d="M13 3a1 1 0 000 2h1a1 1 0 100-2H13z" />
          <path d="M17 3a1 1 0 000 2h1a1 1 0 100-2H17z" />
          <path d="M5 7a1 1 0 00-1 1v1a1 1 0 102 0V8a1 1 0 00-1-1z" />
          <path d="M9 7a1 1 0 00-1 1v1a1 1 0 102 0V8a1 1 0 00-1-1z" />
          <path d="M13 7a1 1 0 00-1 1v1a1 1 0 102 0V8a1 1 0 00-1-1z" />
          <path d="M17 7a1 1 0 00-1 1v1a1 1 0 102 0V8a1 1 0 00-1-1z" />
          <path d="M3 11a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1z" />
          <path d="M7 11a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1z" />
          <path d="M11 11a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1z" />
          <path d="M15 11a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1z" />
          <path d="M19 11a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1z" />
          <path d="M5 15a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1z" />
          <path d="M9 15a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1z" />
          <path d="M13 15a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1z" />
          <path d="M17 15a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1z" />
        </svg>
        {itemCount > 0 && (
          <span
            className="absolute -top-1 -right-1 inline-flex items-center justify-center h-5 w-5 rounded-full bg-purple-400 text-white text-xs font-bold"
            aria-label={`${itemCount} items in cart`}
          >
            {itemCount > 99 ? "99+" : itemCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default CartControl;
