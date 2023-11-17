import { ICheckout } from "../types";

export interface ICheckoutState {
	checkout: ICheckout;
}

interface ICreateCheckoutAction {
	type: "INITIALISE_CHECKOUT";
	checkout: ICheckout;
}

interface IUpdateCheckoutItemAction {
	type: "UPDATE_CHECKOUT";
	checkout: ICheckout;
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
		case "INITIALISE_CHECKOUT":
			return { ...state, checkout: action.checkout };
		case "UPDATE_CHECKOUT":
			return { ...state, checkout: action.checkout };
		default:
			return state;
	}
}
