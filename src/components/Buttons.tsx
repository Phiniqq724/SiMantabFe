import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variants?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  disable?: boolean;
  icon?: React.ReactNode;
}

export default function Button({
  children,
  onClick,
  className,
  variants,
  disable,
  icon,
  size,
}: ButtonProps) {
  const small = size === "sm";
  const medium = size === "md";
  const large = size === "lg";
  const primary = variants === "primary";
  const secondary = variants === "secondary";
  if (small) {
    if (!disable) {
      if (primary) {
        return (
          <button
            className={`flex gap-2 rounded-sm px-4 justify-center text-white bg-biru-tua py-2 duration-500 hover:bg-blue-900 ${className}`}
            onClick={onClick}
          >
            {icon}
            {children}
          </button>
        );
      } else if (secondary) {
        return (
          <button
            className={`flex gap-2 rounded-sm px-4 justify-center text-biru-tua hover:outline-blue-900 hover:text-blue-900 bg-sky-200 hover:bg-sky-300 outline-1 outline outline-biru-tua py-2 duration-500 ${className}`}
            onClick={onClick}
          >
            {icon}
            {children}
          </button>
        );
      }
    } else {
      if (primary) {
        return (
          <button
            className={`duration-500 flex gap-2 bg-gray-400 px-4 justify-center py-2 rounded-sm text-gray-800 cursor-not-allowed ${className}`}
            disabled
          >
            {icon}
            {children}
          </button>
        );
      } else if (secondary) {
        return (
          <button
            className={`duration-500 flex gap-2 bg-gray-300 outline-gray-500 outline outline-1 px-4 justify-center py-2 rounded-sm text-gray-800 cursor-not-allowed ${className}`}
            disabled
          >
            {icon}
            {children}
          </button>
        );
      }
    }
  } else if (medium) {
    if (!disable) {
      if (primary) {
        return (
          <button
            className={`flex gap-2 rounded-sm px-8 justify-center text-white bg-biru-tua py-2 duration-500 hover:bg-blue-900 ${className}`}
            onClick={onClick}
          >
            {icon}
            {children}
          </button>
        );
      } else if (secondary) {
        return (
          <button
            className={`flex gap-2 rounded-sm px-8 justify-center text-biru-tua hover:outline-blue-900 hover:text-blue-900 bg-sky-200 hover:bg-sky-300 outline-1 outline outline-biru-tua py-2 duration-500 ${className}`}
            onClick={onClick}
          >
            {icon}
            {children}
          </button>
        );
      }
    } else {
      if (primary) {
        return (
          <button
            className={`duration-500 flex gap-2 bg-gray-400 px-8 justify-center py-2 rounded-sm text-gray-800 cursor-not-allowed ${className}`}
            disabled
          >
            {icon}
            {children}
          </button>
        );
      } else if (secondary) {
        return (
          <button
            className={`duration-500 flex gap-2 bg-gray-300 outline-gray-500 outline outline-1 px-8 justify-center py-2 rounded-sm text-gray-800 cursor-not-allowed ${className}`}
            disabled
          >
            {icon}
            {children}
          </button>
        );
      }
    }
  } else if (large) {
    if (!disable) {
      if (primary) {
        return (
          <button
            className={`flex gap-2 rounded-sm px-12 justify-center text-white bg-biru-tua py-2 duration-500 hover:bg-blue-900 ${className}`}
            onClick={onClick}
          >
            {icon}
            {children}
          </button>
        );
      } else if (secondary) {
        return (
          <button
            className={`flex gap-2 rounded-sm px-12 justify-center text-biru-tua hover:outline-blue-900 hover:text-blue-900 bg-sky-200 hover:bg-sky-300 outline-1 outline outline-biru-tua py-2 duration-500 ${className}`}
            onClick={onClick}
          >
            {icon}
            {children}
          </button>
        );
      }
    } else {
      if (primary) {
        return (
          <button
            className={`duration-500 flex gap-2 bg-gray-400 px-12 justify-center py-2 rounded-sm text-gray-800 cursor-not-allowed ${className}`}
            disabled
          >
            {icon}
            {children}
          </button>
        );
      } else if (secondary) {
        return (
          <button
            className={`duration-500 flex gap-2 bg-gray-300 outline-gray-500 outline outline-1 px-12 justify-center py-2 rounded-sm text-gray-800 cursor-not-allowed ${className}`}
            disabled
          >
            {icon}
            {children}
          </button>
        );
      }
    }
  }
}
