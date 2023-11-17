import { ICheckout } from "../../../types";
import { TCheckoutAction } from "../../../reducers/checkout-reducer";
import CheckoutLineItem from "../../molecules/CheckoutLineItem/CheckoutLineItem";
import { updateCheckoutItem } from "../../../api/checkout-items";

export interface ICheckoutSummaryProps
	extends Pick<ICheckout, "items" | "currency"> {
	title: string;
	dispatch: React.Dispatch<TCheckoutAction>;
}

export default function CheckoutSummary({
	title,
	items,
	currency,
	dispatch,
}: ICheckoutSummaryProps) {
	return (
		<div>
			{title ? <h2>Your order</h2> : title}
			<table>
				<thead>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Unit price</th>
						<th>Sub-total</th>
					</tr>
				</thead>
				{items ? (
					<tbody>
						{items.map((item) => (
							<CheckoutLineItem
								key={item.id}
								item={item}
								currency={currency}
								onChangeQuantity={async (e) => {
									try {
										const checkout = await updateCheckoutItem({
											checkoutItemId: item.id,
											quantity: parseInt(e.target.value),
										});
										dispatch({
											type: "UPDATE_CHECKOUT",
											checkout,
										});
									} catch (err) {
										console.error(err);
									}
								}}
							/>
						))}
					</tbody>
				) : null}
			</table>
		</div>
	);
}
