import React from "react";
import { inputProps } from "./interfaces/inputProps";

const TextInput: React.FC<inputProps> = ({ error, className, ...res }) => {
  return (
    <input
      {...res}
      className={` ${className} inline-block h-[clamp(48px,4.6vh,88px)] w-[clamp(242px,26.7vw,672px)] md:w-[clamp(320px,26.7vw,672px)] text-[16px] border border-[#F5F5F5] bg-[#F5F5F5] rounded-[12px] p-2
         ${
           error ? "focus:outline-none border-error" : "focus:outline-primary"
         } `}
    />
  );
};

export default TextInput;
