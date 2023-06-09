import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import walletReducer from "../reducer/wallet_reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
	wallet: walletReducer,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
