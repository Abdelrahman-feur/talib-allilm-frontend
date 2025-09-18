import React from "react";
import HeaderSection from "../components/headerSection";
import FamilyMemberForm from "./components/familyMemberForm";
export const dynamic = "force-static";

const Page = () => {
  return (
    <>
      <HeaderSection key="family-admin-title">
        Join as family member
      </HeaderSection>
      <FamilyMemberForm />
    </>
  );
};

export default Page;
