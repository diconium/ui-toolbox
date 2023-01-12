import React from "react";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button = ({ label, onClick = () => {} }: ButtonProps) => {
  return (
    <button
      onClick={() => onClick()}
      className="px-8 py-2 bg-toolbox-primary text-white rounded-xl max-w-xs"
    >
      {label}
    </button>
  );
};

export default Button;
