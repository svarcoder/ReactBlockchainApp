import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../shared/style/theme";
import Routes from "./components/routes/routes";

function App() {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Routes />
			</ThemeProvider>
		</div>
	);
}

export default App;
