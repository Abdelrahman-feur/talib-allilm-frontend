import React from "react";

interface props {
  children: React.ReactNode;
}

const HeaderSection: React.FC<props> = ({ children }) => {
  return (
    <header className="text-center">
      <h1 className="2xl:mb-[72px] lg:mb-8 md:mb-4  mb-2">
        Hello, welcome to talib alillm
      </h1>
      <p className="sub-title 2xl:mb-40 lg:mb-[60px] md:mb-12">{children}</p>
    </header>
  );
};

export default HeaderSection;
