"use client";
import Modal from "@/components/modals/modal";
import React, { useState } from "react";
import ModalCloseButton from "./modalCloseButton";
import ResetPasswordModalHeader from "./resetPasswordModalHeader";
import ResetPasswordForm1 from "./resetPasswordForm1";
import ResetPasswordForm2 from "./resetPasswordForm2";
import ResetPasswordForm3 from "./resetPasswordForm3";

interface props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const ResetPasswordModal: React.FC<props> = ({ setIsOpen, isOpen }) => {
  const [formStep, setFormStep] = useState<number>(1);
  const [otp, setOtp] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <Modal isOpen={isOpen} onClose={setIsOpen}>
      <div className=" w-[clamp(307px,37.37vw,956px)] flex flex-col items-center h-fit pb-9">
        <ModalCloseButton onClose={setIsOpen} className="m-[3.3vh]" />

        <div className=" min-w-[307px] w-[70%]  flex flex-col items-center ">
          <ResetPasswordModalHeader step={formStep} />
          {formStep < 4 && (
            <>
              {formStep === 1 && (
                <ResetPasswordForm1
                  setFormStep={setFormStep}
                  setEmail={setEmail}
                />
              )}
              {formStep === 2 && (
                <ResetPasswordForm2 setFormStep={setFormStep} setOtp={setOtp} />
              )}
              {formStep === 3 && (
                <ResetPasswordForm3
                  setFormStep={setFormStep}
                  email={email}
                  otp={otp}
                />
              )}
            </>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ResetPasswordModal;
