"use client";
import FormikInputField from "@/app/signup/(forms)/components/formikInputField";
import FormikPasswordField from "@/app/signup/(forms)/components/formikPasswordField";
import Button from "@/components/buttons/Button";
import { Form, Formik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import ResetPasswordModal from "./resetPasswordModal";

const LoginFormSection = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <ResetPasswordModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={() => {
          console.log("test");
        }}
      >
        <Form className="flex  flex-col 2xl:gap-14 lg:gap-6 md:justify-start  justify-center gap-6  w-fit">
          <FormikInputField
            id="email"
            name="email"
            label="Email"
            placeholder="Your email"
          />
          <FormikPasswordField
            id="password"
            name="password"
            label="password"
            placeholder="Your password"
            className="relative"
          />
          <button
            className=" self-end inline-block 2xL-my-11 lg:-m-2 cursor-pointer font-semibold 2xl:text-2xl text-[14px] text-primary"
            onClick={() => {
              setIsOpen(true);
            }}
            type="button"
          >
            Forgot password?
          </button>
          <Button
            size="lg"
            variant="primary"
            className="my-14"
            type="submit"
            onClick={() => {}}
            isLoading={false}
            key={"login-submit-button"}
          >
            Login
          </Button>
          <p className="text-text-color text-center 2xl:text-[32px]">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primary font-semibold">
              {" "}
              Signup
            </Link>{" "}
          </p>
        </Form>
      </Formik>
    </>
  );
};

export default LoginFormSection;
