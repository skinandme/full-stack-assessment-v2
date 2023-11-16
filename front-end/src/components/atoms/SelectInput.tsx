import { ChangeEventHandler } from "react";

export interface IOption {
	label: string;
	value: number | string;
}

export interface ISelectInputProps {
	name: string;
	options: IOption[];
	value: number | string;
	onChange: ChangeEventHandler<HTMLSelectElement>;
}

export default function SelectInput({
	name,
	value,
	options,
	onChange,
}: ISelectInputProps) {
	return (
		<select name={name} value={value} onChange={onChange}>
			{options.map((option) => (
				<option key={option.label} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
}
