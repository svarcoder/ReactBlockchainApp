import React, { useState } from "react";
import { Button, ContainerWrap, Input, Status } from "./style";

interface ITransactionProps {
	contractsData: any | null;
}

const OtherTransaction: React.FC<ITransactionProps> = (props) => {
	const [sendAddress, setSendAddress] = useState<string | any>({
		from: "",
		to: "",
		ether: "",
	});
	const [transactionDetails, setTransactionDetails] = useState<any | null>(
		null
	);

	const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setSendAddress((prevState: any) => ({
			...prevState,
			[event.target.id]: event.target.value,
		}));
	};

	const sendTransaction = async (
		contractsData: any,
		from: string,
		to: string,
		value: string
	) => {
		try {
			// setSendAddress({
			// 	from: "",
			// 	to: "",
			// 	ether: "",
			// });
			let address = JSON.parse(localStorage.getItem("address") || "{}");
			let transaction = await contractsData.methods
				.transferFrom(from, to, value)
				.send({ from: address });
			setTransactionDetails(transaction);
			console.log("====================================");
			console.log(transaction);
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
					placeholder='From Address'
					id='from'
					value={sendAddress.from}
					onChange={(e) => handelChange(e)}
				/>
				<Input
					type='text'
					placeholder='To Address'
					id='to'
					value={sendAddress.to}
					onChange={(e) => handelChange(e)}
				/>
				<Input
					type='number'
					placeholder='Eth'
					id='ether'
					value={sendAddress.ether}
					onChange={(e) => handelChange(e)}
				/>
				<Button
					onClick={() =>
						sendTransaction(
							props.contractsData,
							sendAddress.from,
							sendAddress.to,
							sendAddress.ether
						)
					}>
					Send
				</Button>
				<Status>
					{transactionDetails?.status === true
						? "Transaction Successfull"
						: transactionDetails === null
						? ""
						: "Transaction Aborted"}
				</Status>
			</ContainerWrap>
		</>
	);
};

export default OtherTransaction;
