import React from "react";
import { ButtonProps } from "./interfaces/buttonProps";
import { sizeMap, variantMap } from "./variables";

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  isLoading,
  size,
  variant,
  className,
  type,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const componentSize = sizeMap[size ?? "lg"];
  const componentVariant = variantMap[variant ?? "primary"];
  return (
    <button
      className={` relative bg-primary ${className}  ${
        componentSize || sizeMap["lg"]
      }   font-bold rounded-[30px]  active:scale-100 cursor-pointer hover:scale-105 transition-colors duration-500 ease-in-out 
      ${componentVariant || variantMap["primary"]}`}
      onClick={handleClick}
      disabled={isLoading}
      type={type}
    >
      {isLoading && isLoading === true ? "...loading" : children}
    </button>
  );
};

export default Button;
