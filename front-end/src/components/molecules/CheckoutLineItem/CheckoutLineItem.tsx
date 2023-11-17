import { ChangeEventHandler } from "react";
import SelectInput from "../../atoms/SelectInput";
import { ICheckoutItem } from "../../../types";
import { formatPrice } from "../../../utils/money";

export interface ICheckoutLineItemProps {
	item: ICheckoutItem;
	currency: "GBP";
	onChangeQuantity: ChangeEventHandler<HTMLSelectElement>;
}

export default function CheckoutLineItem({
	item,
	currency,
	onChangeQuantity,
}: ICheckoutLineItemProps) {
	const name = `${item.product.sku}-quantity`;
	const options = Array.from({ length: 10 }, (_, index) => ({
		value: index + 1,
		label: (index + 1).toString(),
	}));

	return (
		<tr>
			<td>{item.product.name}</td>
			<td>
				<SelectInput
					name={name}
					value={item.quantity}
					options={options}
					onChange={onChangeQuantity}
				/>
			</td>
			<td>{formatPrice({ amount: item.product.unit_price, currency })}</td>
			<td>{formatPrice({ amount: item.sub_total, currency })}</td>
		</tr>
	);
}
