import React, { useEffect, useState } from "react";
import wallet from "../../../../utils/wallet";
import Balance from "../balance";
import OtherTransaction from "../otherTransaction";
import LoadToken from "../token";
import { Button, ContainerWrap, Input, Status } from "./style";

const About: React.FC = (props) => {
	const [sendAddress, setSendAddress] = useState<string | any>({
		address: "",
		ether: "",
	});

	const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setSendAddress((prevState: any) => ({
			...prevState,
			[event.target.id]: event.target.value,
		}));
	};

	const [contractsData, setContractsData] = useState<string | null>(null);
	const [name, setName] = useState<string | null>(null);
	const [symbol, setSymbol] = useState<string | null>(null);
	const [totalSupply, setTotalSupply] = useState<number | null>(null);
	const [transactionDetails, setTransactionDetails] = useState<any | null>(
		null
	);

	useEffect(() => {
		let walletConnected = localStorage.getItem("walletConnected");
		let walletType = Number(localStorage.getItem("walletType"));

		const loadAllData = async () => {
			let loadData = await wallet.loadBlockchainData(walletType);
			let loadData2 = await wallet.loadLiquidityData(walletType);
			console.log("====================================");
			console.log(loadData2);
			console.log("====================================");
			setContractsData(loadData);
			let name = await loadData.methods.name().call();
			let symbol = await loadData.methods.symbol().call();
			let totalSupply = await loadData.methods.totalSupply().call();
			setName(name);
			setSymbol(symbol);
			setTotalSupply(totalSupply);
		};
		if (walletConnected && walletType) {
			loadAllData();
		}
	}, []);

	const sendTransaction = async (
		contractsData: any,
		to: string,
		value: string
	) => {
		try {
			setSendAddress({
				address: "",
				ether: "",
			});
			let address = JSON.parse(localStorage.getItem("address") || "{}");
			let transaction = await contractsData.methods
				.transfer(to, value)
				.send({ from: address });
			setTransactionDetails(transaction);
		} catch (error) {
			console.log("====================================");
			console.log(error);
			console.log("====================================");
		}
	};

	return (
		<>
			<LoadToken name={name} symbol={symbol} totalSupply={totalSupply} />
			<ContainerWrap>
				<Input
					type='text'
					placeholder='Address'
					id='address'
					value={sendAddress.address}
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
							contractsData,
							sendAddress.address,
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
			<Balance contractsData={contractsData} />
			<OtherTransaction contractsData={contractsData} />
		</>
	);
};

export default About;
