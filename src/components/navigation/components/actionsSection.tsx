import Link from "next/link";
import React from "react";

const RegisterAndLoginButtons = () => {
  return (
    <div className=" hidden lg:flex gap-3 items-baseline justify-between">
      <Link
        href="/signup"
        className="   font-bold   active:scale-100 cursor-pointer hover:scale-105 transition-colors duration-500 ease-in-out rounded-[30px] md-btn btn-primary flex justify-center items-center "
      >
        Sign Up
      </Link>

      <Link
        href="/login"
        className="font-bold   active:scale-100 cursor-pointer hover:scale-105 transition-colors duration-500 ease-in-out rounded-[30px] md-btn btn-outline flex justify-center items-center "
      >
        Login
      </Link>
    </div>
  );
};

export default RegisterAndLoginButtons;
