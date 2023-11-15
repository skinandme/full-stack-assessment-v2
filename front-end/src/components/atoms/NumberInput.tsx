import { ChangeEventHandler } from "react";

export interface INumberInputProps {
	value: number;
	min?: string;
	max?: string;
	htmlFor: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function NumberInput({
	min,
	max,
	value,
	htmlFor,
	onChange,
}: INumberInputProps) {
	return (
		<input
			id={htmlFor}
			type="number"
			min={min}
			max={max}
			value={value}
			onChange={onChange}
		/>
	);
}
