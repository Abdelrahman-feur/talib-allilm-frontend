import { Form } from "formik";
import React, { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const FormContainer: React.FC<props> = ({ children }) => {
  return (
    <Form className="md:grid flex flex-col items-center md:grid-cols-2 2xl:gap-20 gap-10 mt-10 ">
      {children}
    </Form>
  );
};

export default FormContainer;
