// Button.tsx
import React from "react";
import { Button } from "../ui/button";

interface IButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const ComButton: React.FC<IButtonProps> = ({ onClick, children, className }) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      className={`text-brandPrimary hover:scale-105 transition duration-500 bg-campfire-gradient hover:bg-highlight focus:ring-2 focus:outline-none focus:ring-brandSecondary font-medium rounded-sm text-sm px-4 py-2 text-center ${className}`}
    >
      {children}
    </Button>
  );
};

export default ComButton;
