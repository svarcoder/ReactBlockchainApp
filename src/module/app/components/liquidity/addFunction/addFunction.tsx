import React, { useState } from "react";
import { Button, ContainerWrap, Input, Status } from "./style";

interface IBalanceProps {
	contractsData: any | null;
	approvedData: any | null;
}

const AddFunction: React.FC<IBalanceProps> = (props) => {
	const [sendAddress, setSendAddress] = useState<string | any>("");
	const [balanceDetails, setBalancenDetails] = useState<any | null>(null);

	const sendTransaction = async (contractsData: any, approvedData: any) => {
		try {
			// setSendAddress("");
			let poolLength = await contractsData.methods.poolLength().call();
			let owner = "0x386EFb15C2aBFE6e0f23855ACc03680d2421EEF2";
			let address = JSON.parse(localStorage.getItem("address") || "{}");
			// let approve = await approvedData.methods
			// 	.approve("0x7532B3538343e7BB08E130EBe0E7D619496762Dd", "200")
			// 	.send({ from: address });
			let balance = await contractsData.methods
				.withdraw(2, 200)
				.send({ from: address });
			// setBalancenDetails(balance);
			// console.log("====================================");
			// console.log(approve);
			// console.log("====================================");
			console.log("====================================");
			console.log(balance);
			console.log("====================================");
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
					onClick={() =>
						sendTransaction(props.contractsData, props.approvedData)
					}>
					Balance
				</Button>
				<Status>{balanceDetails ? balanceDetails : ""}</Status>
			</ContainerWrap>
		</>
	);
};

export default AddFunction;
