import { GET_BALANCE } from "../action/constants";

const initialState = {
	amount: 0,
};

const walletReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case GET_BALANCE:
			return {
				...state,
				amount: action.amount,
			};
		default:
			return state;
	}
};

export default walletReducer;
