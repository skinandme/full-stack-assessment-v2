import { ICheckout } from "../types";

export interface ICheckoutState {
	checkout?: ICheckout;
}

interface ICreateCheckoutAction {
	type: "CREATE_CHECKOUT";
	checkout: ICheckout;
}

interface IUpdateCheckoutItemAction {
	type: "UPDATE_CHECKOUT_ITEM";
	checkoutItemId: number;
	quantity: number;
}

export type TCheckoutAction = ICreateCheckoutAction | IUpdateCheckoutItemAction;

export interface ICheckoutReducer {
	(state: ICheckoutState, action: TCheckoutAction): ICheckoutState;
}

export default function checkoutReducer(
	state: ICheckoutState,
	action: TCheckoutAction
) {
	switch (action.type) {
		case "CREATE_CHECKOUT":
			return { ...state, checkout: action.checkout };
		case "UPDATE_CHECKOUT_ITEM":
			return state;
		default:
			return state;
	}
}
