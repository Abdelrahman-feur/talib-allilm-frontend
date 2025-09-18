import { X } from "lucide-react";
import React from "react";

interface props {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

const ModalCloseButton: React.FC<props> = ({ onClose, className }) => {
  return (
    <div className="text-end w-full">
      <button
        type="button"
        className={`cursor-pointer ${className}`}
        onClick={() => onClose(false)}
      >
        <X className="bg-[#EBE9E6] rounded-full p-1 text-lg" />
      </button>
    </div>
  );
};

export default ModalCloseButton;
