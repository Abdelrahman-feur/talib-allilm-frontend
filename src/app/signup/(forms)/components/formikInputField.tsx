"use client";
import TextInput from "@/components/inputs/textInput";
import { useField } from "formik";
import React from "react";
import { formikFieldsprops } from "../utils/formikFieldsProps";
import SuperAcctress from "./superAcctress";

const FormikInputField: React.FC<formikFieldsprops> = ({
  label,
  required,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex  flex-col w-fit ">
      <label
        htmlFor={props.id || props.name}
        className="2xl:text-2xl text-base"
      >
        {" "}
        {label} {required && <SuperAcctress />}
      </label>
      <TextInput
        {...field}
        {...props}
        value={field.value || ""}
        error={meta.touched && meta.error ? true : false}
        key={"26515s6dsdg"}
      />
      {meta.touched && meta.error ? (
        <div className="error text-red-400">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormikInputField;
