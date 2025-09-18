"use client";
import React from "react";
import { useField, useFormikContext } from "formik";
import UploadInput from "@/components/inputs/uploadInput";
import SuperAcctress from "./superAcctress";

interface FormikUploadFieldProps {
  name: string;
  label?: string;
  required?: boolean;
  multiple?: boolean;
}

const FormikUploadField: React.FC<FormikUploadFieldProps> = ({
  label,
  required,
  multiple = true,
  ...props
}) => {
  const [field, meta] = useField<File[] | null>(props.name);
  const { setFieldValue } = useFormikContext<unknown>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.currentTarget.files) return;

    const files = Array.from(event.currentTarget.files);
    if (multiple) {
      setFieldValue(props.name, [...(field.value || []), ...files]);
    } else {
      setFieldValue(props.name, files[0]);
    }
  };

  const removeFile = (index: number) => {
    if (!field.value) return;
    const newFiles = [...field.value];
    newFiles.splice(index, 1);
    setFieldValue(props.name, newFiles.length > 0 ? newFiles : null);
  };

  return (
    <div className="flex flex-col gap-2 ">
      {label && (
        <label htmlFor={props.name} className="2xl:text-2xl text-base">
          {label} {required && <SuperAcctress />}
        </label>
      )}

      <UploadInput
        id={props.name}
        name={props.name}
        multiple={multiple}
        fileName={"file"}
        onChange={handleChange}
        error={!!(meta.touched && meta.error)}
      />

      {/* Preview selected files */}
      {Array.isArray(field.value) && field.value.length > 0 && (
        <ul className="mt-2 flex flex-col gap-1">
          {field.value.map((file, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between border p-2 rounded bg-gray-50"
            >
              <span className="truncate text-sm">{file.name}</span>
              <button
                type="button"
                onClick={() => removeFile(idx)}
                className="text-red-500 text-xs"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Validation error */}
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error as string}</div>
      ) : null}
    </div>
  );
};

export default FormikUploadField;
