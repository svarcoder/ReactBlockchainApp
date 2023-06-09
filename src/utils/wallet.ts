import Web3 from "web3";
import { WalletTypes, Networks } from "./constants";
import WalletConnectProvider from "@walletconnect/web3-provider";
import detectEthereumProvider from "@metamask/detect-provider";
import { loadLiquidityAddress } from "../config";
import {
	walletTestConnetId,
	walletMainConnetId,
	networkTestChainId,
	networkMainChainId,
	Address,
	loadAddress,
} from "../config";

class Wallet {
	web3: any;
	walletType = 0;

	constructor() {
		this.web3 = new Web3(Web3.givenProvider);
	}

	getNetwork = (network: string): string => {
		switch (network) {
			case Networks.mainnet:
				return "Mainnet";

			case Networks.ropsten:
				return "Ropsten";

			case Networks.rinkeby:
				return "Rinkeby";

			case Networks.goerli:
				return "Goerli";

			case Networks.kovan:
				return "Kovan";

			case Networks.moonBaseAlpha:
				return "Moonbase Alpha";

			default:
				return "Unknown";
		}
	};

	async setProvider(type: number) {
		let provider;

		console.log("----Type-----", type);

		switch (type) {
			case WalletTypes.metamask:
				provider = await detectEthereumProvider();
				console.log("----Provider-----", provider);
				const { ethereum } = window;
				if (provider === ethereum) {
					//@ts-ignore
					this.web3.setProvider(provider);
					this.walletType = type;
				}
				break;

			case WalletTypes.walletConnect:
				provider = new WalletConnectProvider({
					// infuraId:'0fe795d7c0254f8096cdeba845d83e99'
					rpc: {
						//@ts-ignore
						[networkMainChainId]: walletMainConnetId,
						[networkTestChainId]: walletTestConnetId,
					},
					chainId: 56,
					bridge: "https://bridge.walletconnect.org",
					qrcode: true,
					pollingInterval: 12000,
				});
				this.walletType = type;
				//@ts-ignore
				this.web3.setProvider(provider);
				break;

			case WalletTypes.binance:
				//@ts-ignore
				this.web3.setProvider(window.BinanceChain);
				this.walletType = type;

				break;
			default:
				throw new Error("Invalid wallet type");
		}
	}

	login = async (type: number) => {
		let accounts: Array<string>;
		let address: String;
		switch (type) {
			case WalletTypes.metamask:
				//@ts-ignore
				accounts = await this.web3.currentProvider.request({
					method: "eth_requestAccounts",
				});
				console.log("----Accounts-----", accounts);
				if (accounts.length) {
					address = this.web3.utils.toChecksumAddress(accounts[0]);
					console.log("----Address-----", address);
				} else {
					throw new Error("No account found");
				}
				//@ts-ignore
				this.web3.currentProvider.on(
					"accountsChanged",
					async (accounts: Array<string>) => {
						//@ts-ignore
						if (accounts.length) {
							address = this.web3.utils.toChecksumAddress(accounts[0]);
						}
					}
				);
				// window.location.reload();
				//@ts-ignore
				// this.web3.currentProvider.on("chainChanged", () => {
				// 	window.location.reload();
				// });
				break;

			case WalletTypes.walletConnect:
				//@ts-ignore
				accounts = await this.web3.currentProvider.enable();
				if (accounts.length) {
					address = this.web3.utils.toChecksumAddress(accounts[0]);
					//@ts-ignore
					localStorage.setItem("address", JSON.stringify(address));
					console.log("walletconnect", address);
				} else {
					throw new Error("No account found");
				}

				//@ts-ignore
				this.web3.currentProvider.on("chainChanged", () => {
					window.location.reload();
				});

				//@ts-ignore
				this.web3.currentProvider.on(
					"accountsChanged",
					async (accounts: string[]) => {
						if (accounts.length) {
							address = this.web3.utils.toChecksumAddress(accounts[0]);
							console.log("add2", address);
						}
					}
				);
				this.web3.currentProvider.on(
					"disconnect",
					(code: number, reason: string) => {
						localStorage.clear();
						window.location.reload();
					}
				);
				break;

			case WalletTypes.binance:
				//@ts-ignore
				accounts = await this.web3.currentProvider.request({
					method: "eth_requestAccounts",
				});
				//@ts-ignore
				if (accounts.length) {
					address = this.web3.utils.toChecksumAddress(accounts[0]);
				} else {
					throw new Error("No account found");
				}

				//@ts-ignore
				this.web3.currentProvider.on(
					"accountsChanged",
					async (accounts: Array<string>) => {
						//@ts-ignore
					}
				);

				//@ts-ignore
				this.web3.currentProvider.on("chainChanged", () => {
					window.location.reload();
				});
				break;
			default:
				throw new Error("Invalid wallet type");
		}
		return address;
	};

	disconnect = async () => {
		switch (this.walletType) {
			case WalletTypes.metamask:
				//@ts-ignore
				await this.web3.currentProvider._handleDisconnect();
				localStorage.clear();
				window.location.reload();
				break;

			case WalletTypes.walletConnect:
				localStorage.clear();
				window.location.reload();
				break;

			case WalletTypes.binance:
				localStorage.clear();
				window.location.reload();
				break;
			default:
				localStorage.clear();
				window.location.reload();
				throw new Error("Invalid wallet type");
		}
	};
	sendTransaction = async (receiver: string, strEther: number) => {
		switch (this.walletType) {
			case WalletTypes.metamask:
				console.log(
					`payWithMetamask(receiver=${receiver}, strEther=${strEther})`
				);
				try {
					const address = Address;

					const transaction = {
						from: address,
						to: receiver,
						value: strEther,
					};

					const signedTx = await this.web3.eth.sendTransaction(transaction);
					console.log("Transaction is ", signedTx);
					window.location.reload();
				} catch (e) {
					console.log("payment fail!");
					console.log(e);
				}

				break;
		}
	};
	loadBlockchainData = async (type: number) => {
		switch (type) {
			case WalletTypes.metamask:
				try {
					let DappToken = require("../contracts/test.json");
					const ADDRESS = loadAddress;
					var tokenContract = new this.web3.eth.Contract(DappToken, ADDRESS);

					return tokenContract;
				} catch (e) {
					console.log("Token Load fail!");
					console.log(e);
				}

				break;
		}
	};
	loadLiquidityData = async (type: number) => {
		switch (type) {
			case WalletTypes.metamask:
				try {
					let DappToken = require("../contracts/liquidity.json");
					const ADDRESS = loadLiquidityAddress;
					var tokenContract = new this.web3.eth.Contract(DappToken, ADDRESS);

					return tokenContract;
				} catch (e) {
					console.log("Token Load fail!");
					console.log(e);
				}

				break;
		}
	};
	loadApproveData = async (type: number) => {
		switch (type) {
			case WalletTypes.metamask:
				try {
					let DappToken = require("../contracts/approve.json");
					const ADDRESS = "0x6e03884333a30eE91AFda92E429fF4FD95Dc2850";
					var tokenContract = new this.web3.eth.Contract(DappToken, ADDRESS);

					return tokenContract;
				} catch (e) {
					console.log("Token Load fail!");
					console.log(e);
				}

				break;
		}
	};
}

export default new Wallet();
