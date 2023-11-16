import { useReducer } from "react";
import checkoutReducer, {
	ICheckoutReducer,
} from "../reducers/checkout-reducer";
import CheckoutSummary from "../components/organisms/CheckoutSummary/CheckoutSummary";
import CheckoutTotals from "../components/organisms/CheckoutTotals/CheckoutTotals";
import Discount from "../components/molecules/Discount/Discount";
import Button from "../components/atoms/Button";
import { formatPrice } from "../utils/money";
import { createCheckout } from "../api/checkouts";

export interface ICheckoutPageProps {
	title: string;
}

export default function Checkout({ title }: ICheckoutPageProps) {
	const [{ checkout }, dispatch] = useReducer<ICheckoutReducer>(
		checkoutReducer,
		{
			checkout: {
				id: 1,
				currency: "GBP",
				items: [
					{
						id: 1,
						product: {
							id: 1,
							sku: "NIA",
							name: "Niacinamide",
							unit_price: 2000,
						},
						quantity: 2,
						sub_total: 4000,
					},
				],
				sub_total: 4000,
				total: 4000,
			},
		}
	);

	return (
		<div>
			{title ? <h1>{title}</h1> : null}
			<div>
				<h2>Simulate a checkout</h2>
				<Button
					label="Create a new checkout"
					onClick={async () => {
						createCheckout({ currency: "GBP" }).then(console.log);
					}}
				/>
			</div>
			<div>
				<CheckoutSummary
					title="Your order"
					items={checkout?.items}
					currency={checkout?.currency}
					dispatch={dispatch}
				/>
				<Discount />
				<CheckoutTotals
					title="Order total"
					totals={[
						{
							label: "Sub-total",
							amount: formatPrice({
								amount: checkout?.sub_total,
								currency: checkout?.currency,
							}),
						},
						{
							label: "Discount total",
							amount: formatPrice({ amount: 0, currency: checkout?.currency }),
						},
						{
							label: "Total",
							amount: formatPrice({
								amount: checkout?.total,
								currency: checkout?.currency,
							}),
						},
					]}
				/>
				<Button label="Place Order" onClick={() => console.log(checkout)} />
			</div>
		</div>
	);
}
