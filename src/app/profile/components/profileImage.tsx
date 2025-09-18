import { PencilLine } from "lucide-react";
import Image from "next/image";
import React from "react";

interface props {
  imageSrc: string;
}

const ProfileImage: React.FC<props> = ({ imageSrc }) => {
  return (
    <div className="relative ">
      <div className=" w-[120px] h-[120px] bg-lightGray rounded-full  overflow-hidden">
        <Image src={imageSrc} alt="default-avatar" width="120" height="120" />
      </div>
      <label
        htmlFor="photo-upload"
        className="absolute w-10 h-10 -bottom-5 cursor-pointer shadow left-[50%] -translate-x-6  rounded-full bg-white z-20 flex justify-center items-center "
      >
        <PencilLine className="text-secondary" width="19" />
      </label>
      <input
        id="photo-upload"
        type="file"
        accept="image/*"
        className="hidden"
      />
    </div>
  );
};

export default ProfileImage;
