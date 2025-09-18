import React from "react";
import HeaderSection from "../components/headerSection";
import CollegeTeacherForm from "./components/collegeTeacherForm";

const Page = () => {
  return (
    <>
      <HeaderSection key="college-teacher-title">
        Join as college teacher
      </HeaderSection>
      <CollegeTeacherForm />
    </>
  );
};

export default Page;
