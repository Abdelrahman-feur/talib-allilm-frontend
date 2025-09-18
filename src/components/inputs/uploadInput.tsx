import React from "react";
import { inputProps } from "./interfaces/inputProps";
interface UploadInputProps extends inputProps {
  fileName?: string;
}
const UploadInput: React.FC<UploadInputProps> = ({
  error,
  fileName,
  ...props
}) => {
  return (
    <div className="relative   flex w-[clamp(242px,26.7vw,672px)] md:w-[clamp(320px,26.7vw,672px)]">
      <input
        type="file"
        {...props}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      <div className="bg-input-background   h-[clamp(48px,4.6vh,88px)] w-[clamp(242px,26.7vw,672px)] md:w-[clamp(320px,26.7vw,672px)] rounded-[12px] flex items-center justify-between px-3  ">
        <span className="text-gray-500 text-sm">
          {fileName ?? "No file chosen"}
        </span>
        <button
          type="button"
          className="text-[12px] font-semibold h-[28px] w-[72px] bg-secondary text-white rounded-[6px] pointer-events-none"
        >
          Choose
        </button>
      </div>
    </div>
  );
};

export default UploadInput;
