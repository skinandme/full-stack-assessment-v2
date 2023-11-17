import { ICheckout } from "../types";
import { defaultHeaders } from "./defaults";

interface ICreateCheckout {
	currency: "GBP";
}

export async function createCheckout({
	currency,
}: ICreateCheckout): Promise<ICheckout> {
	const response = await window.fetch("http://127.0.0.1:9000/checkouts", {
		method: "POST",
		body: JSON.stringify({ currency }),
		headers: {
			...defaultHeaders,
		},
	});
	return response.json();
}
