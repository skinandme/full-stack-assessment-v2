import { defaultHeaders } from "./defaults";
import { ICheckout } from "../types";

interface ICreateCheckoutItem {
	checkoutId: number;
	productId: number;
	quantity: number;
}

interface IUpdateCheckoutItem {
	checkoutItemId: number;
	quantity: number;
}

export async function createCheckoutItem({
	checkoutId,
	productId,
	quantity,
}: ICreateCheckoutItem): Promise<ICheckout> {
	const response = await window.fetch("http://127.0.0.1:9000/checkout_items", {
		method: "POST",
		headers: {
			...defaultHeaders,
		},
		body: JSON.stringify({
			checkout_id: checkoutId,
			product_id: productId,
			quantity,
		}),
	});
	return response.json();
}

export async function updateCheckoutItem({
	checkoutItemId,
	quantity,
}: IUpdateCheckoutItem): Promise<ICheckout> {
	const response = await window.fetch(
		`http://127.0.0.1:9000/checkout_items/${checkoutItemId}`,
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
