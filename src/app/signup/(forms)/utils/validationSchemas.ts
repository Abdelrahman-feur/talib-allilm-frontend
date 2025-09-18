import { isValidPhoneNumber } from "libphonenumber-js";
import * as Yup from "yup";

export const basicUserValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .test("is-valid", "Invalid phone number", (value) =>
      value ? isValidPhoneNumber(value) : false
    ),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  country: Yup.string().required("Country is required"),
  gender: Yup.string().required("Gender is required"),
  primaryLanguage: Yup.string().required("Primary language is required"),
  uploadPhoto: Yup.mixed(),
  terms: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required(),
});

export const teacherValidationSchema = basicUserValidationSchema.shape({
  subjects: Yup.array()
    .of(Yup.string())
    .min(1, "Select at least one subject")
    .required("Subjects are required"),
  docs: Yup.array()
    .of(Yup.mixed().required("Document is required"))
    .min(1, "At least one document is required"),
  price: Yup.object({
    priceType: Yup.string().required("Price type is required"),
    priceAmount: Yup.number().when("priceType", {
      is: (val: string) => val === "perCourse" || val === "perHour",
      then: (schema) =>
        schema
          .required("Price amount is required")
          .min(1, "Price must be greater than 0"),
      otherwise: (schema) => schema.notRequired(),
    }),
  }),
});

export const collegeAdminValidationSchemaStep1 =
  basicUserValidationSchema.shape({
    docs: Yup.mixed(),
  });
export const collegeAdminValidationSchemaStep2 = Yup.object().shape({
  legalCompanyName: Yup.string().required("Company name is required"),
  collegeAddress: Yup.string().required("College address is required"),
  companyPhone: Yup.string()
    .required("Phone number is required")
    .test("is-valid", "Invalid phone number", (value) =>
      value ? isValidPhoneNumber(value) : false
    ),
  companyRegistrationNumber: Yup.number().required(
    "Company registration number is required"
  ),
  RegistrationCountry: Yup.string().required("Country is required"),
});
export const familyAdminValidationSchema = basicUserValidationSchema.shape({
  familyMemeberCount: Yup.number()
    .required("Family member count is required")
    .min(1, "At least one family member is required"),
});

export const familyMemberValidationSchema = basicUserValidationSchema.shape({
  age: Yup.number()
    .required("Age is required")
    .min(5, "Age must be a positive number"),
});

export const collegeTeacherValidationSchema = basicUserValidationSchema.shape({
  legalCompanyName: Yup.string().required("Company name is required"),
  companyAddress: Yup.string().required("Company address is required"),
  docs: Yup.mixed(),
});
