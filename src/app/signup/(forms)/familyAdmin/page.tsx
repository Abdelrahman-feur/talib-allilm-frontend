import React, { Suspense } from "react";
import HeaderSection from "../components/headerSection";
import FamilyAdminSignupForm from "./components/familyAdminSignupForm";
export const dynamic = "force-static";

const Page = () => {
  return (
    <>
      <HeaderSection key="family-admin-title">
        Join as family admin
      </HeaderSection>
      <Suspense fallback={<div>Loading...</div>}>
        <FamilyAdminSignupForm />
      </Suspense>
    </>
  );
};

export default Page;
