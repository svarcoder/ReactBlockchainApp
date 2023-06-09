import React, { useEffect, useState } from "react";
import wallet from "../../../../utils/wallet";
import { Button, ContainerWrap, Input, Status } from "./style";
import ReadFunction from "./ReadFunction";
import AddFunction from "./addFunction";

interface ILiquidityProps {
	contractsData: any | null;
}

const Liquidity: React.FC<ILiquidityProps> = (props) => {
	const [contractsData, setContractsData] = useState<string | null>(null);
	const [approvedData, setApprovedData] = useState<string | null>(null);
	const [balanceDetails, setBalancenDetails] = useState<any | null>({
		bnb: "",
		bnbPerBlock: "",
		bust: "",
		bustPerBlock: "",
		burnAddress: "",
		dao: "",
		daoAddress: "",
		rewardValue: "",
		rewardValueBnb: "",
		owner: "",
		poolLength: "",
		totalAllocpoint: "",
	});

	useEffect(() => {
		let walletConnected = localStorage.getItem("walletConnected");
		let walletType = Number(localStorage.getItem("walletType"));

		const loadAllData = async () => {
			let loadData = await wallet.loadLiquidityData(walletType);
			let approvedData = await wallet.loadApproveData(walletType);
			console.log("====================================");
			console.log(loadData);
			console.log("====================================");
			console.log("====================================");
			console.log(approvedData);
			console.log("====================================");
			setContractsData(loadData);
			setApprovedData(approvedData);
			let bnb = await loadData.methods.BNB().call();
			let bnbPerBlock = await loadData.methods.BNBPerBlock().call();
			let bust = await loadData.methods.BUST().call();
			let bustPerBlock = await loadData.methods.BUSTPerBlock().call();
			let burnAddress = await loadData.methods.burnAddress().call();
			let dao = await loadData.methods.dao().call();
			let daoAddress = await loadData.methods.daoAddress().call();
			let rewardValue = await loadData.methods.defaultRewardValue().call();
			let rewardValueBnb = await loadData.methods
				.defaultRewardValueBNB()
				.call();
			let owner = await loadData.methods.owner().call();
			let poolLength = await loadData.methods.poolLength().call();
			let totalAllocpoint = await loadData.methods.totalAllocPoint().call();
			setBalancenDetails({
				bnb: bnb,
				bnbPerBlock: bnbPerBlock,
				bust: bust,
				bustPerBlock: bustPerBlock,
				burnAddress: burnAddress,
				dao: dao,
				daoAddress: daoAddress,
				rewardValue: rewardValue,
				rewardValueBnb: rewardValueBnb,
				owner: owner,
				poolLength: poolLength,
				totalAllocpoint: totalAllocpoint,
			});
		};
		if (walletConnected && walletType) {
			loadAllData();
		}
	}, []);

	return (
		<>
			<ReadFunction balanceDetails={balanceDetails} />
			<AddFunction contractsData={contractsData} approvedData={approvedData} />
			{/* <ContainerWrap>
				<Input
					type='text'
					placeholder='Address'
					id='address'
					value={sendAddress}
					onChange={(e) => setSendAddress(e.target.value)}
				/>
				<Button
				// onClick={() => sendTransaction(props.contractsData, sendAddress)}
				>
					Balance
				</Button>
				<Status>{balanceDetails ? balanceDetails.bnb : ""}</Status>
			</ContainerWrap> */}
		</>
	);
};

export default Liquidity;
