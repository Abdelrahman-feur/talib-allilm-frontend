export interface inputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  className?: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  className?: string;
}
