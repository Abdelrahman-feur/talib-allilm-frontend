import React from "react";
interface props {
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}
const ShowSideNavButton: React.FC<props> = ({ setShowSideBar }) => {
  return (
    <div
      onClick={() => {
        setShowSideBar(true);
      }}
      className=" cursor-pointer flex   lg:hidden flex-col justify-center items-center gap-2 p-2"
    >
      <div className=" w-10 h-0  border-2"></div>
      <div className=" w-10 h-0  border-2"></div>
      <div className=" w-10 h-0  border-2"></div>
    </div>
  );
};

export default ShowSideNavButton;
