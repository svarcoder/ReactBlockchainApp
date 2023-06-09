import styled, { keyframes } from "styled-components";
import { colors, screenSizes } from "../style/theme";

export const Content = styled.div``;
export const SemiHead = styled.p`
	font-size: 12px;
	line-height: 19px;
	font-family: Light;
	margin: 0;
	color: white;
	@media (min-width: ${screenSizes.mediaM}px) {
		font-size: 16px;
	}
`;
export const AddressInfoWrap = styled.div`
	display: flex;
	justify-content: center;
`;
export const ConnectButtonWrap = styled.div`
	display: flex;
	justify-content: center;
	cursor: pointer;
	background: ${colors.cardBackground};
	text-transform: uppercase;
	padding: 10px;
	transition: all 0.2s;
	img {
		margin-right: 8px;
	}
	p {
		font-family: Regular;
		font-weight: 600;
		font-size: 12px;
		line-height: 18px;
		margin: 0;
		color: ${colors.white};
		margin-top: 2px;
	}
	&:hover {
		background: #1b2732;
	}
`;
export const BnbInfo = styled.div`
	color: ${colors.white};
	font-size: 12px;
	line-height: 19px;
	font-family: SemiBold;
	background: ${colors.cardBackground};
	border-radius: 4px;
	padding: 12px 50px 9px 25px;
	height: 23px;
	@media (min-width: ${screenSizes.mediaS}px) {
		font-size: 12px;
		padding: 12px 50px 9px 15px;
	}
	@media (min-width: ${screenSizes.mediaL}px) {
		font-size: 16px;
		padding: 12px 50px 9px 25px;
	}
`;

export const AddressInfo = styled.div`
	color: ${colors.white};
	font-size: 12px;
	border-radius: 4px;
	line-height: 19px;
	font-family: Light;
	background: ${colors.cardBackground};
	padding: 12px 25px 7px 25px;
	height: 25px;
	margin-left: 0px;
	width: 120px;
	text-overflow: ellipsis;
	overflow: hidden;
	cursor: pointer;
	@media (min-width: ${screenSizes.mediaS}px) {
		font-size: 12px;
		padding: 12px 10px 7px 10px;
		width: 80px;
	}
	@media (min-width: ${screenSizes.mediaL}px) {
		font-size: 14px;
		padding: 12px 25px 7px 25px;
		width: 120px;
	}
`;

export const OptionArea = styled.div`
	border-radius: 0px;
	margin-bottom: 25px;
`;

export const WalletOption = styled.div`
	background: ${colors.InputBackground};
	border-radius: 0px;
	// border: 0.5px solid rgba(204, 204, 204, 0.1);
	margin-bottom: 15px;
	z-index: 0;
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	padding: 16px;
	&:hover {
		// transform: translate(3px);
		// border: 1px solid #615d71;
	}
	&:active {
		transform: translate(1px, -1px);
	}

	p {
		margin: 0;
		font-weight: 600;
		font-size: 20px;
		line-height: 25px;
		font-family: SemiBold;
		color: white;
		margin-top: 15px;
	}
`;

export const WalletDetails = styled.div`
	margin-top: 40px;
	margin-bottom: 15px;
	p {
		font-size: 16px;
		line-height: 23px;
		font-family: Light;
		color: white;
		margin-top: 15px;
		text-align: center;
		word-break: break-all;
	}
`;

export const LinksFlex = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 0 0 60px 0;
	a {
		color: #fbec5b;
		text-decoration: none;
		font-size: 12px;
		line-height: 19px;
		font-family: Light;
		letter-spacing: 0.3px;
		cursor: pointer;
		@media (min-width: ${screenSizes.mediaM}px) {
			font-size: 16px;
		}
	}
	img {
		height: 20px;
		margin-left: 5px;
		display: inline-block;
		margin-top: -3px;
		cursor: pointer;
		@media (min-width: ${screenSizes.mediaM}px) {
			height: 24px;
		}
	}
	p {
		color: ${colors.white};
		font-size: 12px;
		font-family: Light;
		margin: 0;
	}
`;
const breatheAnimation = keyframes`
 0% {  transform: translateY(0px);}
 25% {  transform: translateY(15px);}
 50% {  transform: translateY(10px);}
 75% { transform: translateY(5px); }
 100% { transform: translateY(0px); }

 `;
export const StatusImage = styled.img`
	animation: ${breatheAnimation} 1.5s linear infinite;
`;
export const StatusContent = styled.div`
	text-align: center;
	a {
		font-family: Light;
		font-size: 16px;
		line-height: 19px;
		color: #fbec5b;
		margin-right: 5px;
		margin-top: 4px;
	}
	p {
		font-family: SemiBold;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		margin: 0;
		color: ${colors.white};
	}
	h2 {
		font-family: Medium;
		font-size: 16px;
		line-height: 19px;
		margin: 10px 0;
		color: ${colors.white};
	}

	h3 {
		font-family: Light;
		font-size: 14px;
		line-height: 16px;
		margin: 0;
		color: ${colors.white};
		font-weight: 300;
	}
`;

export const LinkFlex = styled.div`
	display: flex;

	img {
		margin-top: -4px;
	}
`;
export const ButtonWrapper = styled.div`
	display: flex;
`;
