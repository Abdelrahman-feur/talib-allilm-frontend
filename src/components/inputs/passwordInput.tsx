"use client";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { inputProps } from "./interfaces/inputProps";

const PasswordInput: React.FC<inputProps> = ({ error, ...res }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className=" relative h-[clamp(48px,4.6vh,88px)] w-[clamp(242px,26.7vw,672px)] md:w-[clamp(320px,26.7vw,672px)]">
      <input
        type={showPassword ? "text" : "password"}
        {...res}
        className={` 
         ${error ? "focus:outline-none border-error" : "focus:outline-primary"}
          w-full h-full inline-block 2xl:text-2xl text-[16px] border border-[#F5F5F5] bg-[#F5F5F5] rounded-[12px] p-2 focus:outline-primary`}
      />
      <button
        type="button"
        className="absolute right-[4%] top-[30%] cursor-pointer"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword && <Eye className="" size={16} />}
        {!showPassword && <EyeOff className=" " size={16} />}
      </button>
    </div>
  );
};

export default PasswordInput;
