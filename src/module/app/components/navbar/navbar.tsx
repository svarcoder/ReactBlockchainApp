import React from "react";
import {
	NavContainer,
	AppLogo,
	NavTabs,
	NavTab,
	WalletWrap,
	NavContainerWrap,
} from "./style";
import { useSelector, useDispatch } from "react-redux";
import { Paths } from "../routes/type";
import history from "../history";
// import { getBalance, Login } from "../../../../logic/actions";
import ConnectWallet from "../../../../shared/connect_wallet";
// import web3 from "../../../blockchain/web3";
// import { Login } from "../../../../logic/actions/wallet";

const Navbar = (props: any) => {
	const [connectWallet, setConnectWallet] = React.useState(false);
	const { walletBalance, walletConnectCheck, address } = useSelector(
		(state: any) => state.wallet
	);
	const [activeLink, setActiveLink] = React.useState(history.location.pathname);
	const dispatch = useDispatch();
	const [walletAddress, setWalletAddress] = React.useState("");

	React.useEffect(() => {
		const path = history.location.pathname;
		if (path === "/swap") {
			setActiveLink("swap");
		} else if (path === "/pool") {
			setActiveLink("pool");
		} else if (path === "/farming") {
			setActiveLink("farming");
		} else if (path === "/referral") {
			setActiveLink("referral");
		}
		history.push(history.location.pathname);
	}, []);

	React.useEffect(() => {
		//@ts-ignore
		const walletConnect = JSON.parse(localStorage.getItem("walletConnected"));
		setConnectWallet(walletConnect);
		//@ts-ignore
		const address = JSON.parse(localStorage.getItem("address"));
		setWalletAddress(address);
		//@ts-ignore
	}, [
		connectWallet,
		setConnectWallet,
		// walletConnectCheck,
		localStorage.getItem("walletConnected"),
	]);

	// // get the address of account manually changed from metamask

	// React.useEffect(() => {
	// 	const changedAccountAddress = async () => {
	// 		web3.currentProvider.on("accountsChanged", async function () {
	// 			window.location.reload();
	// 			let accounts = await web3.eth.getAccounts();
	// 			localStorage.setItem("address", JSON.stringify(accounts));
	// 			dispatch(Login(accounts));
	// 		});
	// 	};
	// 	changedAccountAddress();
	// }, []);

	// React.useEffect(() => {
	// 	let accounts = "";
	// 	const changeAdd = async () => {
	// 		accounts = await web3.eth.getAccounts();
	// 		if (accounts.length) {
	// 			accounts = await web3.utils.toChecksumAddress(accounts[0]);
	// 			localStorage.setItem("address", JSON.stringify(accounts));
	// 		}
	// 	};
	// 	changeAdd();
	// }, [walletAddress]);

	return (
		<NavContainerWrap>
			<NavContainer>
				<NavTabs>
					<AppLogo src='https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/0d/1d/20/0d1d2041-0fa4-cc63-4fce-8a90071aa510/source/512x512bb.jpg'></AppLogo>
				</NavTabs>
				<WalletWrap>
					<NavTab isActiveTab={activeLink === "home" ? true : false}>
						<a href='/home'>Home</a>
					</NavTab>

					<NavTab>
						<a href='/about'>Transaction</a>
					</NavTab>

					<NavTab>
						<a href='/liquidity'>Liquidity</a>
					</NavTab>

					<NavTab>
						<a>Farming</a>
					</NavTab>
					<ConnectWallet
						connectWallet={connectWallet}
						walletAddress={walletAddress}
						setConnectWallet={setConnectWallet}
						walletBalance={walletBalance}
						checkWallet={props.checkWallet}
						closeWalletModal={() => null}
						setWalletAddress={setWalletAddress}
					/>
				</WalletWrap>
			</NavContainer>
		</NavContainerWrap>
	);
};

export default Navbar;
