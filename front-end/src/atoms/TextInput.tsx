import React from "react";

interface ITextInputProps {
  value: string;
  htmlFor: string;
  placeholder?: string;
  autoComplete?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<ITextInputProps> = ({
  value,
  htmlFor,
  placeholder,
  autoComplete,
  onChange,
}) => {
  return (
    <input
      type={"text"}
      id={htmlFor}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      autoComplete={autoComplete}
    />
  );
};

export default TextInput;
