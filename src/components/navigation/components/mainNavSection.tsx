import Image from "next/image";
import React from "react";
import ShowSideNavButton from "./showSideNavButton";
import RegisterAndLoginButtons from "./actionsSection";
import MainNavBar from "./mainNavBar";

interface props {
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}
const MainNavSection: React.FC<props> = ({ setShowSideBar }) => {
  return (
    <header className="container py-[41px] shadow  mx-auto w-full   ">
      <section className=" gap-3 flex justify-between  items-center h-[48px] ">
        <Image
          className="cursor-pointer 2xl:w-[167px] 2xl:h-[94px] xl:w-[85px] xl:h-[48px] "
          src={"/logo.svg"}
          alt="website-logo"
          width={"85"}
          height={"48"}
        />
        <MainNavBar
          className="hidden 2xl:text-[28px] xl:text-[18px] gap-4 text-center lg:flex justify-between w-[clamp(641px,44.5vw,1092px)]"
          key={"main-nav-bar-items"}
        />
        <RegisterAndLoginButtons />
        <ShowSideNavButton setShowSideBar={setShowSideBar} />
      </section>
    </header>
  );
};

export default MainNavSection;
