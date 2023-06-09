import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./logic/store/store";
import App from "./module/app";

test("renders learn react link", () => {
	const { getByText } = render(
		<Provider store={store}>
			<App />
		</Provider>
	);

	expect(getByText(/learn/i)).toBeInTheDocument();
});
