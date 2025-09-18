import React, { ReactNode } from "react";

interface myprops {
  children: ReactNode;
}

const SocialIconContainer: React.FC<myprops> = ({ children }) => {
  return (
    <span className="xl:w-14 xl:h-14 sm:w-11 sm:h-11 w-7 h-7 rounded-full border flex justify-center items-center border-gray">
      {children}
    </span>
  );
};

export default SocialIconContainer;
