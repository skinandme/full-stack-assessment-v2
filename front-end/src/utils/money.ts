export function formatPrice({
	amount,
	currency,
}: {
	amount: number;
	currency: string;
}) {
	const value = amount / 100;
	return new Intl.NumberFormat("en-GB", {
		style: "currency",
		currency,
	}).format(value);
}
