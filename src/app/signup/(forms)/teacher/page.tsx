import React from "react";
import HeaderSection from "../components/headerSection";
import TeacherSignup from "./components/teacherSignup";
export const dynamic = "force-static";

const Page = () => {
  return (
    <>
      <HeaderSection>Join as teacher</HeaderSection>
      <TeacherSignup />
    </>
  );
};

export default Page;
