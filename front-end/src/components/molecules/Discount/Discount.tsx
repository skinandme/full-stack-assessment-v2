import Button from "../../atoms/Button";

export default function Discount() {
	return (
		<div>
			<h2>Discount code</h2>
			<input type="text" placeholder="Discount code" />
			<Button label="Apply discount" />
		</div>
	);
}
