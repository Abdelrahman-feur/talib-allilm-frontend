import React from "react";
import { SelectProps } from "./interfaces/inputProps";

const SelectField: React.FC<SelectProps> = ({
  error,
  className,
  children,
  ...res
}) => {
  return (
    <select
      {...res}
      className={` ${className} text-gray inline-block h-[clamp(48px,4.6vh,88px)] w-[clamp(242px,26.7vw,672px)] md:w-[clamp(320px,26.7vw,672px)] 2xl:text-2xl text-base border border-[#F5F5F5] bg-[#F5F5F5] rounded-[12px] p-2
      ${error ? "focus:outline-none border-error" : "focus:outline-primary"} `}
    >
      {children}
    </select>
  );
};

export default SelectField;
