import ModalCloseButton from "@/app/login/components/modalCloseButton";
import React from "react";
import animations from "../navigation.module.css";
import MainNavBar from "./mainNavBar";
import Link from "next/link";

interface props {
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}
const SideNavSection: React.FC<props> = ({ setShowSideBar, showSideBar }) => {
  return (
    <div
      onClick={() => {
        setShowSideBar(false);
      }}
      className={`lg:hidden bg-[#00000066] w-full fixed
           min-h-full  top-0 left-0 z-40
          transition-opacity duration-300
      ${
        showSideBar
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!showSideBar}
    >
      <section
        onClick={(e) => e.stopPropagation()}
        className={` p-[48px] h-screen custom-scrollbar  overflow-y-scroll w-[314px] md:w-[361px]  bg-white z-50 
        rounded-r-4xl  ${
          showSideBar ? animations["side-bar"] : animations["hide-bar"]
        }`}
      >
        <ModalCloseButton
          onClose={() => {
            setShowSideBar(false);
          }}
        />
        <MainNavBar
          className="flex flex-col gap-6"
          key={"Side-nav-bar-items"}
        />
        <Link
          href="/signup"
          className=" mt-14   font-bold   active:scale-100 cursor-pointer hover:scale-105 transition-colors duration-500 ease-in-out rounded-[30px] md-btn btn-primary flex justify-center items-center "
        >
          Sign Up
        </Link>
        <Link
          href="/login"
          className="font-bold mt-6   active:scale-100 cursor-pointer hover:scale-105 transition-colors duration-500 ease-in-out rounded-[30px] md-btn btn-outline flex justify-center items-center "
        >
          Login
        </Link>
      </section>
    </div>
  );
};

export default SideNavSection;
