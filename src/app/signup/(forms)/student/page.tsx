import React from "react";
import StudentSignupForm from "./components/studentSignupForm";
import HeaderSection from "../components/headerSection";
export const dynamic = "force-static";

const Page = () => {
  return (
    <>
      <HeaderSection key="student-signup-form">Join as student</HeaderSection>
      <StudentSignupForm />
    </>
  );
};

export default Page;
