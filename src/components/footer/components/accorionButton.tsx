import React, { SetStateAction } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const AccordionButton = ({
  show,
  setShow,
  title,
  nestTitle,
}: {
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
  title: string;
  nestTitle?: string;
}) => {
  return (
    <>
      <h4 className="text-lg">
        {" "}
        {title}{" "}
        {nestTitle && (
          <span className=" text-[16px] md:text-[20px] text-[#777777]">
            {nestTitle}
          </span>
        )}
      </h4>
      <button
        onClick={() => setShow(!show)}
        className={`inline-block  lg:hidden  p-2`}
      >
        {show ? (
          <RiArrowUpSLine className="text-xl" />
        ) : (
          <RiArrowDownSLine className="text-xl" />
        )}
      </button>
    </>
  );
};

export default AccordionButton;
