import Image from "next/image";
import React from "react";
import student from "../../../../public/studentSignup.png";
import teacher from "../../../../public/teacherSignup.png";
import collegeAdmin from "../../../../public/collegeAdminSignup.png";
import familyAdmin from "../../../../public/familyAdminSignup.png";
import { Roles } from "../utils/enums";

interface props {
  role: string;
}

const SignupImagesSection: React.FC<props> = ({ role }) => {
  return (
    <section className="hidden 2xl:h-[1070px] lg:h-[636px]  md:h-[328px]   relative md:block lg:col-span-7 lg:col-start-6   md:col-span-4 ">
      {role === Roles.STUDENT && (
        <Image
          placeholder="blur"
          fill
          className="object-contain"
          src={student}
          alt="signup image "
        />
      )}
      {role === Roles.TEACHER && (
        <Image
          fill
          className="object-contain"
          placeholder="blur"
          src={teacher}
          alt="signup image "
        />
      )}
      {role === Roles.COLLEGE_ADMIN && (
        <Image
          fill
          className="object-contain"
          placeholder="blur"
          src={collegeAdmin}
          alt="signup image "
        />
      )}

      {role === Roles.FAMILY_ADMIN && (
        <Image
          fill
          className="object-contain"
          placeholder="blur"
          src={familyAdmin}
          alt="signup image "
        />
      )}
    </section>
  );
};

export default SignupImagesSection;
