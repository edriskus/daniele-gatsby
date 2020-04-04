import { Dispatch, SetStateAction, ChangeEvent } from "react";
import { ValidationError } from "yup";

export const handleChange = (setter: Dispatch<SetStateAction<string>>) => (
  event: ChangeEvent<HTMLInputElement>
) => {
  const value = event.target?.value;
  if (typeof value === "string") {
    setter(value);
  }
};

export const findError = (errors: ValidationError[], name: string) => {
  return errors.find(error => error.path === name);
};
