import React from "react";

import SignupWrapper from "./components/signupWrapper";
// export const metadata: Metadata = {
//   title: "Signup",
//   description:
//     "Create your account to access courses and resources on Talib Alilm.",
// };

export async function generateStaticParams() {
  return [{ role: "student" }, { role: "teacher" }, { role: "admin" }];
}

const Page = () => {
  return <SignupWrapper />;
};

export default Page;
