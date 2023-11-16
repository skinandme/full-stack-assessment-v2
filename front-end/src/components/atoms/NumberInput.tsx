import { ChangeEventHandler } from "react";

export interface INumberInputProps {
	value: number;
	min: string;
	max: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function NumberInput({
	min,
	max,
	value,
	onChange,
}: INumberInputProps) {
	return (
		<input
			type="number"
			min={min}
			max={max}
			value={value}
			onChange={onChange}
		/>
	);
}
