import React from "react";
import { formikFieldsprops } from "../utils/formikFieldsProps";
import { useField } from "formik";

const FormikCheckBoxInput: React.FC<formikFieldsprops> = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="col-span-2">
      <input {...field} {...props} value={field.value || ""} type="checkbox" />
      <label htmlFor={props.id || props.name} className="inline-block ms-2">
        {" "}
        I agree <strong>terms of use</strong> and{" "}
        <strong>privacy policy</strong>{" "}
      </label>
      {meta.touched && meta.error ? (
        <div className="error text-red-400">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormikCheckBoxInput;
