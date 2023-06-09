import {
	GET_BALANCE,
	LOGIN,
	WALLET_CONNECT_CHECK,
	SET_CHAINID,
	WALLET_BALANCE,
} from "./constants";
import wallet from "../../utils/wallet";

export const getLPBalance = (amount: any) => {
	return {
		type: GET_BALANCE,
		lp_Balance: amount,
	};
};

export const Login = (userAddress: String) => {
	return {
		type: LOGIN,
		address: userAddress,
	};
};

export const walletConnectCheck = (value: any) => {
	return {
		type: WALLET_CONNECT_CHECK,
		value: value,
	};
};
export const setChainIdValue = (val: any) => {
	return {
		type: SET_CHAINID,
		value: val,
	};
};
export const getWalletBalance = (balance: String) => {
	return {
		type: WALLET_BALANCE,
		balance: balance,
	};
};

export const getBalance = (address: any) => async (dispatch: any) => {
	if (address) {
		const balance = await wallet.web3.eth.getBalance(address);
		dispatch(getWalletBalance(balance));
		dispatch(getLPBalance(address));
	}
};
