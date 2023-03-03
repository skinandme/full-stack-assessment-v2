import React from "react";

interface ILabelProps extends React.PropsWithChildren {
  htmlFor?: string;
}

const Label: React.FC<ILabelProps> = ({ children, htmlFor }) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

export default Label;
