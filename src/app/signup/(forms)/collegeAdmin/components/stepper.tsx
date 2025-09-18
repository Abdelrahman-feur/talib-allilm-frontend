import React from "react";

interface StepperProps {
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  const match = "text-secondary border-secondary";
  const unmatch = "text-gray border-gray";
  const step1Classes = currentStep === 1 ? match : unmatch;
  const step2Classes = currentStep === 2 ? match : unmatch;
  return (
    <div className=" relative text-center flex 2xl:my-11 my-6  justify-center items-center gap-2 ">
      <span
        className={`relative ${step1Classes}  flex justify-center items-center 2xl:text-3xl text-xl 2xl:w-[70px] 2xl:h-[70px] w-10 h-10 text-center border  rounded-full`}
      >
        1
        <span className="absolute text-base top-12 2xl:top-20 2xl:text-2xl w-40">
          Admin info
        </span>
      </span>
      <div
        className={`border border-b-0 border-t-[1px] ${step2Classes} w-16 md:w-32 lg:w-48`}
      ></div>
      <span
        className={`relative flex justify-center ${step2Classes} items-center text-xl 2xl:text-3xl 2xl:w-[70px] 2xl:h-[70px] w-10 h-10 text-center border rounded-full`}
      >
        2
        <span className="absolute text-base top-12 2xl:top-20 2xl:text-2xl w-40">
          College info
        </span>
      </span>
    </div>
  );
};

export default Stepper;
