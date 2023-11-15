import { defaultHeaders } from "./defaults";

interface ICreateCheckout {
	currency: "GBP";
}

export async function createCheckout(
	controller: AbortController,
	{ currency }: ICreateCheckout
) {
	const response = await window.fetch("http://localhost:9000/checkouts", {
		signal: controller.signal,
		method: "POST",
		body: JSON.stringify({ currency }),
		headers: {
			...defaultHeaders,
		},
	});
	return response.json();
}

export async function getCheckout(checkoutId: number) {
	const response = await window.fetch(
		`http://localhost:9000/checkouts/${checkoutId}`,
		{
			headers: {
				...defaultHeaders,
			},
		}
	);
	return response.json();
}