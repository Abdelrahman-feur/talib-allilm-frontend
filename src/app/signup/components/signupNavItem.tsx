import React, { ReactNode } from "react";

interface myprops {
  active: boolean;
  children: ReactNode;
  myRole: string;
  onSet: React.Dispatch<React.SetStateAction<string>>;
}

const SignupNavItem: React.FC<myprops> = ({
  active,
  children,
  myRole,
  onSet,
}) => {
  const activeClass = "text-primary font-semibold  border-primary border-2";
  const inactiveClass = "text-gray   bg-lightGray";
  return (
    <button
      type="button"
      onClick={() => {
        onSet(myRole);
      }}
      className={`${
        active ? activeClass : inactiveClass
      }  cursor-pointer 2xl:text-[24px] xl:text-[16px] px-6 md:text-[14px] rounded-xl  flex justify-start lg-btn items-center  `}
    >
      {children}
    </button>
  );
};

export default SignupNavItem;
