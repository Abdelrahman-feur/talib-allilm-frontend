import React, { Suspense } from "react";
import HeaderSection from "../components/headerSection";
import CollegeAdminForm from "./components/collegeAdminForm";

const Page = () => {
  return (
    <>
      <HeaderSection key="college-admin-title">
        Join as college admin
      </HeaderSection>
      <Suspense fallback={<div>Loading...</div>}>
        <CollegeAdminForm />
      </Suspense>
    </>
  );
};

export default Page;
