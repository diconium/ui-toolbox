import React from "react";
import Font from "./config";

export interface IconProps {
  icon: string;
}

export { Font };

export const Icon = ({ icon }: IconProps) => {
  return (
    <span className="toolbox-icons-outlined">
      {`${Font[icon as keyof typeof Font]}`}
    </span>
  );
};

export default Icon;
