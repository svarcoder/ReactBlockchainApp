import React, { useState } from "react";
import { Button, ContainerWrap, Input, Status } from "./style";

interface IBalanceProps {
	contractsData: any | null;
}

const Balance: React.FC<IBalanceProps> = (props) => {
	const [sendAddress, setSendAddress] = useState<string | any>("");
	const [balanceDetails, setBalancenDetails] = useState<any | null>(null);

	const sendTransaction = async (contractsData: any, sendAddress: string) => {
		try {
			setSendAddress("");
			let balance = await contractsData.methods.balanceOf(sendAddress).call();
			setBalancenDetails(balance);
		} catch (error) {
			console.log("====================================");
			console.log(error);
			console.log("====================================");
		}
	};

	return (
		<>
			<ContainerWrap>
				<Input
					type='text'
					placeholder='Address'
					id='address'
					value={sendAddress}
					onChange={(e) => setSendAddress(e.target.value)}
				/>
				<Button
					onClick={() => sendTransaction(props.contractsData, sendAddress)}>
					Balance
				</Button>
				<Status>{balanceDetails ? balanceDetails : ""}</Status>
			</ContainerWrap>
		</>
	);
};

export default Balance;
