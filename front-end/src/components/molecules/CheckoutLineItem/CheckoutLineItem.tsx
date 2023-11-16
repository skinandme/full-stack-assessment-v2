import { ChangeEventHandler } from "react";
import NumberInput from "../../atoms/NumberInput";
import { ICheckoutItem } from "../../../types";
import { formatPrice } from "../../../utils/money";

export interface ICheckoutLineItemProps {
	item: ICheckoutItem;
	currency?: "GBP";
	onChangeQuantity: ChangeEventHandler<HTMLInputElement>;
}

export default function CheckoutLineItem({
	item,
	currency,
	onChangeQuantity,
}: ICheckoutLineItemProps) {
	return (
		<tr>
			<td>{item.product.name}</td>
			<td>
				<NumberInput
					min="1"
					max="10"
					value={item.quantity}
					onChange={onChangeQuantity}
				/>
			</td>
			<td>{formatPrice({ amount: item.product.unit_price, currency })}</td>
			<td>{formatPrice({ amount: item.sub_total, currency })}</td>
		</tr>
	);
}
