import { MouseEventHandler, ButtonHTMLAttributes } from "react";

interface IButtonProps {
	label: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export default function Button({
	label,
	onClick,
	type = "button",
}: IButtonProps) {
	return (
		<button onClick={onClick} type={type}>
			{label}
		</button>
	);
}
