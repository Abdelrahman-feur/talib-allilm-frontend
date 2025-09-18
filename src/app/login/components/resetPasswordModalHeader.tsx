import React from "react";
import SuccessIcon from "./successIcon";
import Button from "@/components/buttons/Button";

interface props {
  step: number;
}

const ResetPasswordModalHeader: React.FC<props> = ({ step }) => {
  return (
    <>
      <div className=" min-w-[307px] w-[22vw] max-w-[956px] flex flex-col items-center ">
        {step === 4 && (
          <div className="mb-[4vh]">
            <SuccessIcon />
          </div>
        )}
        <h2 className="text-center font-semibold text-2xl 2xl:text-[32px] ">
          {" "}
          {step === 4 ? "Success" : "Reset password"}
        </h2>

        <p className="sub-title text-center">
          {step === 1 &&
            "A password reset email will be sent to your email address "}
          {step === 2 && "Enter the 6 digit code that was sent to your email"}
          {step === 3 && "Enter your new password"}
          {step === 4 && "Your password has been updated"}
        </p>

        {step === 4 && (
          <Button
            size="sm"
            variant="primary"
            className="mt-[7vh]"
            onClick={() => {}}
            type="button"
          >
            {" "}
            Ok{" "}
          </Button>
        )}
      </div>
    </>
  );
};

export default ResetPasswordModalHeader;
