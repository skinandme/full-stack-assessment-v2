export interface ITotal {
	label: string;
	amount: string;
}

export interface IOrderTotalsProps {
	title: string;
	totals: ITotal[];
}

export default function OrderTotals({ title, totals }: IOrderTotalsProps) {
	return (
		<div>
			{title ? <h2>{title}</h2> : null}
			<table>
				<thead>
					<tr>
						<th>Total</th>
						<th>Amount</th>
					</tr>
				</thead>
				{totals ? (
					<tbody>
						{totals.map((total) => (
							<tr key={total.label}>
								<td>{total.label}</td>
								<td>{total.amount}</td>
							</tr>
						))}
					</tbody>
				) : null}
			</table>
		</div>
	);
}
