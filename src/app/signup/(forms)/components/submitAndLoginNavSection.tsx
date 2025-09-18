import Button from "@/components/buttons/Button";
import Link from "next/link";
import React from "react";

interface props {
  text?: string;
}

const SubmitAndLoginNavSection: React.FC<props> = ({ text }) => {
  return (
    <>
      <div className="md:col-span-2 2xl:mt-40 2xl:gap-[88px] mt-16 flex flex-col gap-8 items-center text-center">
        <Button
          type="submit"
          size="lg"
          variant="primary"
          onClick={() => {}}
          isLoading={false}
        >
          {text ?? "Signup"}
        </Button>
      </div>
      <div className="md:col-span-2 2xl:text-[32px] text-center">
        <p className="text-gray">
          Already have an account?{" "}
          <Link href="/login" className="text-black ">
            {" "}
            Login
          </Link>{" "}
        </p>
      </div>
    </>
  );
};

export default SubmitAndLoginNavSection;
