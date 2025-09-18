"use client";
import React, { useState } from "react";
import SignupNavSection from "./signupNavSection";
import { Roles } from "../utils/enums";
import SignupImagesSection from "./signupImagesSection";

const SignupWrapper = () => {
  const [role, setRole] = useState<string>(Roles.STUDENT);

  return (
    <main className=" min-h-screen 2xl:my-[120px] md:my-24 my-12 xl:my-24 grid justify-center  items-center gap-3 lg:grid-cols-12 md:grid-cols-8 grid-cols-4">
      <section className="  flex flex-col items-center md:items-start col-span-4 md:col-span-4 xl:col-span-4  ">
        <header className="">
          <h1 className=" xl:text-[45px] lg:text-[35px] 2xl:text-center xl:text-center md:text-start text-center">
            Choose your role
          </h1>
          <p className=" text-center sub-title  md:text-start xl:text-center ">
            How would you like to use Talib Alillm?
          </p>
        </header>
        <SignupNavSection role={role} setRole={setRole} />
      </section>
      <SignupImagesSection role={role} />
    </main>
  );
};

export default SignupWrapper;
