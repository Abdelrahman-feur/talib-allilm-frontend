export const basicUserInitialvalue = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  country: "",
  gender: "",
  primaryLanguage: "",
  photo: null,
  terms: false,
};

export const teacherInitialValues = {
  ...basicUserInitialvalue,
  subjectsToTeach: "",
  price: { priceType: "", amount: "" },
  docs: null,
};

export const collegeAdminInitialValues = {
  ...basicUserInitialvalue,
  docs: [],
  legalCompanyName: "",
  companyRegistrationNumber: "",
  RegistrationCountry: "",
  companyAddress: "",
  companyPhone: "",
};

export const familyAdminInitialValues = {
  ...basicUserInitialvalue,
  familyMemeberCount: "",
};

export const familyMemberInitialValues = {
  ...basicUserInitialvalue,
  age: "",
};

export const collegeTeacherInitialValues = {
  ...basicUserInitialvalue,
  docs: [],
  legalCompanyName: "",
  companyAddress: "",
};
