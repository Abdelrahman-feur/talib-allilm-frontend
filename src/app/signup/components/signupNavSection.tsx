"use client";
import React from "react";
import SignupNavItem from "./signupNavItem";
import { GraduationCap } from "lucide-react";
import TeacherIcon from "./teacherIcon";
import CollegeAdminIcon from "./collegeAdminIcon";
import FamilyAdminIcon from "./familyIconAdmin";
import { useRouter } from "next/navigation";
import Button from "@/components/buttons/Button";
import { Roles } from "../utils/enums";
import Link from "next/link";

interface props {
  role: string;
  setRole: React.Dispatch<React.SetStateAction<string>>;
}

const SignupNavSection: React.FC<props> = ({ role, setRole }) => {
  const router = useRouter();
  function handleContinue() {
    if (role) {
      router.prefetch(`/signup/${role}`);
      router.push(`/signup/${role}`);
    }
  }
  return (
    <nav className="mt-8 flex flex-col items-center gap-4 2xl:gap-10">
      <SignupNavItem
        active={role === Roles.STUDENT ? true : false}
        myRole={Roles.STUDENT}
        onSet={setRole}
      >
        <GraduationCap strokeWidth={1} size={24} className="me-4" /> Student
      </SignupNavItem>
      <SignupNavItem
        active={role === Roles.TEACHER ? true : false}
        myRole={Roles.TEACHER}
        onSet={setRole}
      >
        <TeacherIcon size="24" className="me-4" /> Teacher
      </SignupNavItem>
      <SignupNavItem
        active={role === Roles.COLLEGE_ADMIN ? true : false}
        myRole={Roles.COLLEGE_ADMIN}
        onSet={setRole}
      >
        <CollegeAdminIcon size="24" className="me-4" /> College admin
      </SignupNavItem>
      <SignupNavItem
        active={role === Roles.FAMILY_ADMIN ? true : false}
        myRole={Roles.FAMILY_ADMIN}
        onSet={setRole}
      >
        <FamilyAdminIcon size="24" className="me-4" /> family admin
      </SignupNavItem>

      <Button
        size="lg"
        className="mt-6"
        variant="primary"
        type="button"
        onClick={handleContinue}
      >
        Continue
      </Button>

      <p className="text-gray mt-10 2xl:mt-16 ">
        Already have an account?{" "}
        <Link className="text-black" href="/login">
          Login
        </Link>{" "}
      </p>
    </nav>
  );
};

export default SignupNavSection;
