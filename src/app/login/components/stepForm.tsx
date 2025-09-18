"use client";
import Button from "@/components/buttons/Button";
import { Formik, Form, FormikHelpers, FormikValues } from "formik";
import React, { useState } from "react";

interface StepFormProps<T> {
  initialValues: FormikValues & T;
  validationSchema?: unknown;
  onSubmit: (
    values: FormikValues & T,
    helpers: FormikHelpers<FormikValues & T>
  ) => void | Promise<void>;
  children: React.ReactNode;
  submitLabel?: string; // النص بتاع الزرار
}

function StepForm<T>({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}: StepFormProps<T>) {
  const [email, setEmail] = useState<string>("");
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="flex  flex-col justify-center items-center  w-fit mt-[5vh]">
        {children}
        <Button
          variant="primary"
          size="lg"
          type="submit"
          className="mt-[40px]"
          onClick={() => {}}
        >
          Submit
        </Button>
      </Form>
    </Formik>
  );
}

export default StepForm;
