import { useField, useFormikContext } from "formik";
import React from "react";
import Select from "react-select";
import SuperAcctress from "./superAcctress";

interface OptionType {
  value: string | number;
  label: string | number;
}

interface props {
  label: string;
  type?: string;
  name: string;
  id: string;
  required?: boolean;
  className?: string;
  options: { value: string | number; label: string | number }[];
}

const FormikMultiSelect: React.FC<props> = ({
  label,
  options,
  required,
  ...props
}) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext<unknown>();

  return (
    <div className="flex flex-col w-fit">
      <label
        htmlFor={props.id || props.name}
        className="2xl:text-2xl text-base"
      >
        {" "}
        {label} {required && <SuperAcctress />}
      </label>
      <Select
        instanceId="multi-select"
        isMulti
        name="subjects"
        options={options}
        value={options.filter((option) => field.value?.includes(option.value))}
        onChange={(selected) =>
          setFieldValue(
            field.name,
            selected ? (selected as OptionType[]).map((s) => s.value) : []
          )
        }
        className="react-select-container"
        classNamePrefix="react-select"
        styles={{
          control: (provided, state) => ({
            ...provided,
            height: "clamp(48px,4.6vh,88px)",
            minHeight: "48px",
            width: "clamp(320px,26.7vw,672px)",
            fontSize: "18px",
            borderRadius: "12px",
            padding: "2px",
            backgroundColor: "#F5F5F5",
            borderColor:
              meta.touched && meta.error
                ? "var(--color-error)"
                : state.isFocused
                ? "var(--color-primary)"
                : "#F5F5F5",
            boxShadow: state.isFocused
              ? "0 0 0 2px var(--color-primary)" // الغي الأزرق تمامًا
              : "none",
            "&:hover": {
              borderColor: "var(--color-primary)", // كمان في hover
            },
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused
              ? "var(--color-primary)"
              : "transparent",
            color: state.isFocused ? "#fff" : "#000",
          }),
          multiValue: (provided) => ({
            ...provided,
            backgroundColor: "#e2e8f0",
            borderRadius: "8px",
          }),
          placeholder: (provided) => ({
            ...provided,
            color: "#666",
          }),
        }}
        placeholder="Select one subject or more"
      />
      {meta.touched && meta.error ? (
        <div className="error text-red-400">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormikMultiSelect;
