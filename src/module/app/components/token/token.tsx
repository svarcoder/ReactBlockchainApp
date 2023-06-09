import React from "react";
import { TokenBody, ContainerWrap, TokenTitle } from "./style";

interface ITokenProps {
	name: string | null;
	symbol: string | null;
	totalSupply: number | null;
}

const LoadToken: React.FC<ITokenProps> = (props) => {
	return (
		<>
			<ContainerWrap>
				<TokenTitle>
					Name:{" "}
					{props.name ? props.name : props.name === null ? "" : "Loading...."}
				</TokenTitle>
				<TokenTitle>
					Symbol:{" "}
					{props.symbol
						? props.symbol
						: props.symbol === null
						? ""
						: "Loading...."}
				</TokenTitle>
				<TokenTitle>
					Total Supply:{" "}
					{props.totalSupply
						? props.totalSupply
						: props.totalSupply === null
						? ""
						: "Loading...."}
				</TokenTitle>
			</ContainerWrap>
		</>
	);
};

export default LoadToken;
