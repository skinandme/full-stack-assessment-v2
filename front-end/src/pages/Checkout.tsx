import { useReducer } from "react";
import checkoutReducer, {
	ICheckoutReducer,
} from "../reducers/checkout-reducer";
import CheckoutSummary from "../components/organisms/CheckoutSummary/CheckoutSummary";
import CheckoutTotals from "../components/organisms/CheckoutTotals/CheckoutTotals";
import Discount from "../components/molecules/Discount/Discount";
import Button from "../components/atoms/Button";
import { formatPrice } from "../utils/money";

export default function Checkout() {
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
			},
		}
	);

	return (
		<div>
			<h1>Review your order</h1>
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
						amount: formatPrice({ amount: 4000, currency: "GBP" }),
					},
					{
						label: "Discount total",
						amount: formatPrice({ amount: 0 }),
					},
					{
						label: "Total",
						amount: formatPrice({ amount: 4000, currency: "GBP" }),
					},
				]}
			/>
			<Button label="Place Order" onClick={() => console.log("")} />
		</div>
	);
}
