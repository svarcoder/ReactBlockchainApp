import React from "react";
import { TokenBody, ContainerWrap, TokenTitle } from "./style";

interface IReadFunctionProps {
	balanceDetails: any | null;
}

const ReadFunction: React.FC<IReadFunctionProps> = (props) => {
	return (
		<>
			<ContainerWrap>
				<TokenTitle>
					BNB: {props.balanceDetails.bnb ? props.balanceDetails.bnb : ""} [
					{props.balanceDetails.bnbPerBlock
						? props.balanceDetails.bnbPerBlock
						: ""}
					]
				</TokenTitle>
				<TokenTitle>
					BUST: {props.balanceDetails.bust ? props.balanceDetails.bust : ""} [
					{props.balanceDetails.bustPerBlock
						? props.balanceDetails.bustPerBlock
						: ""}
					]
				</TokenTitle>
				<TokenTitle>
					Burn Address:{" "}
					{props.balanceDetails.burnAddress
						? props.balanceDetails.burnAddress
						: ""}
				</TokenTitle>
				<TokenTitle>
					DAO: {props.balanceDetails.dao ? props.balanceDetails.dao : ""} [
					{props.balanceDetails.daoAddress
						? props.balanceDetails.daoAddress
						: ""}
					]
				</TokenTitle>

				<TokenTitle>
					Reward Value:{" "}
					{props.balanceDetails.rewardValue
						? props.balanceDetails.rewardValue
						: ""}{" "}
					[
					{props.balanceDetails.rewardValueBnb
						? props.balanceDetails.rewardValueBnb
						: ""}
					]
				</TokenTitle>
				<TokenTitle>
					Owner Address:{" "}
					{props.balanceDetails.owner ? props.balanceDetails.owner : ""}
				</TokenTitle>
				<TokenTitle>
					Pool Length:{" "}
					{props.balanceDetails.poolLength
						? props.balanceDetails.poolLength
						: ""}
				</TokenTitle>
				<TokenTitle>
					Total Allocpoint:{" "}
					{props.balanceDetails.totalAllocpoint
						? props.balanceDetails.totalAllocpoint
						: ""}
				</TokenTitle>
			</ContainerWrap>
		</>
	);
};

export default ReadFunction;
