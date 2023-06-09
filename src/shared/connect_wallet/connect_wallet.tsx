import * as React from "react";
import {
	Content,
	AddressInfoWrap,
	AddressInfo,
	WalletOption,
	WalletDetails,
	StatusContent,
	ConnectButtonWrap,
	ButtonWrapper,
} from "./style";
import { colors } from "../style/theme";
import CustomModal from "../custom_model";
import wallet from "../../utils/wallet";
import {
	Login,
	walletConnectCheck,
	setChainIdValue,
} from "../../logic/action/wallet";

import { WalletTypes } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../components/button";
// import web3 from "../../modules/blockchain/web3";
const ConnectWallet = (props: any) => {
	const {
		connectWallet,
		walletAddress,
		setConnectWallet,
		setWalletAddress,
		checkWallet,
		showWalletModal,
		closeWalletModal,
	} = props;
	const [walletOptions, setWalletOptions] = React.useState(false);
	const [disconnectWallet, setDisconnectWallet] = React.useState(false);
	const [errorModal, setErrorModal] = React.useState(false);
	const [walletType, setWalletType] = React.useState(false);
	const { chainId } = useSelector((state: any) => state.wallet);

	const dispatch = useDispatch();
	const connect = async (type: any) => {
		//@ts-ignore
		if (connectWallet) {
			await wallet.disconnect();
			localStorage.clear();
			dispatch(walletConnectCheck(false));
		} else {
			try {
				await wallet.setProvider(type);
				const address = await wallet.login(type);
				dispatch(Login(address));
				setWalletAddress(address);
				const chainid = await wallet.web3.eth.getChainId();
				dispatch(setChainIdValue(chainid));
				if (address !== undefined) {
					setConnectWallet(true);
					localStorage.setItem("address", JSON.stringify(address));
					localStorage.setItem("walletConnected", JSON.stringify(true));
					localStorage.setItem("walletType", JSON.stringify(type));
					dispatch(walletConnectCheck(true));
				}
				//** signature hashing and getting access token **//
				// userCheck(address);
				// SignatureFun(address);
				setWalletOptions(false);
			} catch (error) {
				console.log("error", error);
				// setErrorModal(true);
			}
		}
	};

	const WalletModalClose = () => {
		setWalletOptions(false);
		closeWalletModal();
	};

	React.useEffect(() => {
		//@ts-ignore
		const walletType = JSON.parse(localStorage.getItem("walletType"));
		setWalletType(walletType);
		const address = localStorage.getItem("address");
		setWalletAddress(address);
	}, []);

	React.useEffect(() => {
		const setChainId = async () => {
			try {
				const chainid = await wallet.web3.eth.getChainId();
				dispatch(setChainIdValue(chainid));
			} catch (e) {
				dispatch(setChainIdValue(0));
			}
		};
		setChainId();
	}, [checkWallet, dispatch]);

	React.useEffect(() => {
		//@ts-ignore
		const switchWallet = JSON.parse(localStorage.getItem("switch"));
		if (switchWallet) {
			setWalletOptions(true);
			localStorage.removeItem("switch");
		}
	}, []);

	return (
		<>
			<Content>
				{walletAddress !== "" && connectWallet ? (
					<AddressInfo onClick={() => setDisconnectWallet(true)}>
						{walletAddress}
					</AddressInfo>
				) : (
					<ConnectButtonWrap onClick={() => setWalletOptions(true)}>
						<p>Connect wallet</p>
					</ConnectButtonWrap>
				)}

				<CustomModal
					show={walletOptions || showWalletModal}
					toggleModal={WalletModalClose}
					heading='Connect to a Wallet'
					// headIcon={require("../../assets/icons/money.svg").default}
				>
					<div style={{ marginTop: "25px" }}>
						{chainId == 0 ? null : (
							<WalletOption onClick={() => connect(WalletTypes.metamask)}>
								<p>Metamask</p>

								<img
									src={require("../../asset/image/metamask.svg").default}
									alt=''
								/>
							</WalletOption>
						)}
						<WalletOption onClick={() => connect(WalletTypes.walletConnect)}>
							{chainId == 0 ? <p>WalletConnect</p> : <p>TrustWallet</p>}
							<img
								src={require("../../asset/image/trustWallet.svg").default}
								alt=''
							/>
						</WalletOption>
						{/* <OptionArea>
            <WalletOption
              onClick={() => connect(WalletTypes.binance)}
              // onClick={() => activate(walletconnect)}
            >
              <p>Binance Chain Wallet</p>

              <img
                src={
                  require("../../assets/icons/binanceChainWallet.svg").default
                }
                alt=""
                style={{ width: "50px" }}
              />
            </WalletOption>
          </OptionArea> */}
					</div>
				</CustomModal>

				{localStorage.getItem("address") && (
					<CustomModal
						show={disconnectWallet}
						toggleModal={setDisconnectWallet}
						heading='Your Wallet'
						// headIcon={require("../../assets/icons/money.svg").default}
					>
						<WalletDetails>
							<p>{walletAddress}</p>
							<div style={{ textAlign: "center" }}>
								<Button
									style={{ width: "100%" }}
									color={colors.black}
									background={colors.buttonColor}
									onClick={() => {
										connect(walletType);
										setDisconnectWallet(false);
									}}>
									Logout
								</Button>
							</div>
						</WalletDetails>
					</CustomModal>
				)}

				<CustomModal
					show={errorModal}
					toggleModal={() => {
						setErrorModal(false);
						setWalletOptions(false);
					}}
					heading='Authorization Error'
					// headIcon={
					//   require("../../assets/icons/authorization-icon.svg").default
					// }
				>
					<StatusContent>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								margin: "40px 0px 100px 0",
							}}>
							<p>Please authorize to access your account</p>
						</div>

						<ButtonWrapper>
							<Button
								style={{
									width: "90%",
									border: "1px solid rgba(186, 169, 255, 0.25)",
									color: "#00D7E7",
									background: "transparent",
									margin: "0 5px 0 0",
								}}
								color={colors.black}
								background={colors.green}
								onClick={() => {
									setErrorModal(false);
								}}>
								DISMISS
							</Button>
							<Button
								style={{ width: "90%", margin: "0 0 0 5px" }}
								color={colors.black}
								background={colors.green}
								onClick={() => {
									setWalletOptions(true);
									setErrorModal(false);
								}}>
								GET A WALLET
							</Button>
						</ButtonWrapper>
					</StatusContent>
				</CustomModal>
			</Content>
		</>
	);
};
export default ConnectWallet;
