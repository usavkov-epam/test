import { InputType } from "../enums/enums.module";

export interface FormAttributes {
  for?: string;
  action: string;
  method: "GET" | "POST";
}

export interface InputAttributes {
  type: InputType;
  name: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
}
