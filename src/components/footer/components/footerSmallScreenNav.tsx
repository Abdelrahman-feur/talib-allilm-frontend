"use client";
import React, { ReactNode, useState } from "react";
import AccordionButton from "./accorionButton";

const FooterSmallScreenNav = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="mt-10 block md:hidden ">
      <div
        className={`text-base font-semibold flex justify-between ${
          show ? "border-primary border-x-0 border-t-0 " : ""
        }  border border-x-0 border-t-0 border-b-2 border-[#C8C8C8]  p-3 relative`}
      >
        <AccordionButton title={title} setShow={setShow} show={show} />
      </div>
      <div
        className={` py-1 px-3 mt-2 h-fit ${
          show ? " flex flex-col gap-4 " : "hidden"
        } md:hidden`}
      >
        {children}
      </div>
    </div>
  );
};

export default FooterSmallScreenNav;
