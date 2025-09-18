import { ReactNode } from "react";

export interface formikFieldsprops {
  label: string;
  type?: string;
  placeholder: string;
  name: string;
  id: string;
  required?: boolean;
  className?: string;
  children?: ReactNode;
}

export interface formikSelectprops {
  label: string;
  type?: string;
  name: string;
  id: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}
