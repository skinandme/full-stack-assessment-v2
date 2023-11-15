import { ICheckout } from "../../../types";
import { TCheckoutAction } from "../../../reducers/checkout-reducer";
import CheckoutLineItem from "../../molecules/CheckoutLineItem/CheckoutLineItem";

export interface IOrderSummaryProps
	extends Partial<Pick<ICheckout, "items" | "currency">> {
	title: string;
	dispatch: React.Dispatch<TCheckoutAction>;
}

export default function OrderSummary({
	title,
	items,
	currency,
	dispatch,
}: IOrderSummaryProps) {
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
								id={item.id}
								key={item.id}
								item={item}
								currency={currency}
								onChangeQuantity={(e) =>
									dispatch({
										type: "UPDATE_CHECKOUT_ITEM",
										checkoutItemId: item.id,
										quantity: parseInt(e.target.value, 10),
									})
								}
							/>
						))}
					</tbody>
				) : null}
			</table>
		</div>
	);
}
