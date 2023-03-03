import React from "react";
import Label from "../atoms/Label";
import TextInput from "../atoms/TextInput";

interface ITextFieldProps {
  label: string;
  value: string;
  placeholder?: string;
  autoComplete?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<ITextFieldProps> = ({
  label,
  value,
  placeholder,
  autoComplete,
  onChange,
}) => {
  const htmlFor = label?.replace(/ /g, "-").toLowerCase();

  return (
    <>
      <Label htmlFor={htmlFor}>{label}</Label>
      <TextInput
        htmlFor={htmlFor}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        autoComplete={autoComplete}
      />
    </>
  );
};

export default TextField;
