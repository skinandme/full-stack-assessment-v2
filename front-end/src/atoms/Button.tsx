import React from "react";

interface IButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

const Button: React.FC<IButtonProps> = ({
  label,
  onClick,
  type = "button",
}) => {
  return (
    <button onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
