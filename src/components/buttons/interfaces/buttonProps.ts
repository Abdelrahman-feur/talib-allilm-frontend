import { ReactNode } from "react";

export interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
  size: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline" | "primaryOutline";
  type: "button" | "reset" | "submit" | undefined;
}
