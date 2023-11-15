import { defaultHeaders } from "./defaults";

interface ICreateCheckoutItem {
	checkoutId: number;
	sku: string;
}

interface IUpdateCheckoutItem {
	checkoutItemId: number;
	quantity: number;
}

export async function createCheckoutItem({
	checkoutId,
	sku,
}: ICreateCheckoutItem) {
	const response = await window.fetch("http://localhost:9000/checkout_items", {
		method: "POST",
		headers: {
			...defaultHeaders,
		},
		body: JSON.stringify({
			checkoutId,
			sku: sku,
		}),
	});
	return response.json();
}

export async function updateCheckoutItem({
	checkoutItemId,
	quantity,
}: IUpdateCheckoutItem) {
	const response = await window.fetch(
		`http://localhost:9000/checkout_items/${checkoutItemId}`,
		{
			method: "PUT",
			headers: {
				...defaultHeaders,
			},
			body: JSON.stringify({
				quantity,
			}),
		}
	);
	return response.json();
}
