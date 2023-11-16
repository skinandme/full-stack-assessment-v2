export function formatPrice({
	amount,
	currency,
}: {
	amount?: number;
	currency?: string;
}) {
	if (typeof amount !== "number" || null) return "MISSING AMOUNT";
	const value = amount / 100;
	if (currency) {
		return new Intl.NumberFormat("en-GB", {
			style: "currency",
			currency,
		}).format(value);
	}
	return "MISSING CURRENCY";
}
