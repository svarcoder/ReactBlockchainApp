import styled from "styled-components";
import { colors, screenSizes } from "../../../../shared/style/theme";

export const NavContainerWrap = styled.div`
	/* background: #9394a0; */
	height: 80px;
	position: fixed;
	width: auto;
	z-index: 100000;
`;

export const NavContainer = styled.div`
	height: auto;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 0;
	max-width: 1600px;
	position: fixed;
	width: auto;
	z-index: 1000;
	margin: auto;
	right: 0;
	left: 0;

	/* background: #9394a0; */
	@media (min-width: ${screenSizes.mediaS}px) {
		height: 80px;
		flex-direction: row;
		align-items: center;
	}
`;

export const AppLogo = styled.img`
	cursor: pointer;
	height: 34px;
	margin-top: 20px;
	margin-bottom: 20px;
	margin-left: 20px;
	@media (min-width: ${screenSizes.mediaS}px) {
		margin-top: 0px;
		height: 54px;
		margin-bottom: 0px;
		width: 128px;
		margin-left: 40px;
	}
	@media (min-width: ${screenSizes.mediaL}px) {
		margin-left: 60px;
	}
	@media (min-width: ${screenSizes.mediaXL}px) {
		margin-left: 80px;
	}
	@media (min-width: ${screenSizes.mediaXXL}px) {
		margin-left: 100px;
	}
`;
export const WalletWrap = styled.div`
	margin-right: 50px;
	display: none;
	color: black;
	@media (min-width: ${screenSizes.mediaS}px) {
		display: flex;
		margin-right: 20px;
	}
	@media (min-width: ${screenSizes.mediaS}px) {
		display: flex;
		margin-right: 40px;
	}
	@media (min-width: ${screenSizes.mediaL}px) {
		margin-right: 60px;
	}
	@media (min-width: ${screenSizes.mediaXL}px) {
		margin-right: 80px;
	}
	@media (min-width: ${screenSizes.mediaXXL}px) {
		margin-right: 100px;
	}
`;

export const ToggleMenu = styled.img`
	display: block;
	margin: 20px;
	@media (min-width: ${screenSizes.mediaS}px) {
		display: none;
	}
`;

export const NavTabs = styled.ul`
	list-style: none;
	transition: all 0.3s;
	margin: 15px 20px 0 0;
	padding: 0;
	border-radius: 4px;
	padding: 4px;
	display: flex;
	flex-direction: row;
	@media (min-width: ${screenSizes.mediaS}px) {
		margin: 0;
	}
`;
export const NavTab = styled.li<any>`
	cursor: pointer;
	position: relative;
	display: flex;

	a {
		font-family: SemiBold;
		font-style: normal;
		font-weight: 600;
		font-size: 12px;
		line-height: 15px;
		letter-spacing: 0.05em;
		color: ${colors.black};
		text-decoration: none;
		display: inline-block;
		padding: 10px 8px;
		@media (min-width: ${screenSizes.mediaS}px) {
			padding: 14px 10px;
			font-size: 16px;
		}
		@media (min-width: ${screenSizes.mediaM}px) {
			padding: 14px 18px;
		}
		@media (min-width: ${screenSizes.mediaXL}px) {
			padding: 14px 18px;
		}

		${(props) =>
			props.isActiveTab
				? `
       background:#1B2732;
       border-radius: 4px;
    `
				: `
        background:transparent;
       
      `}
	}
	&:hover {
		background: #474b4e;
		border-radius: 4px;

		a {
			color: ${colors.white};
			opacity: 1;
		}
	}
	img {
		position: absolute;
		top: 20px;
		right: 0px;
		@media (min-width: ${screenSizes.mediaXL}px) {
			right: 12px;
		}
	}
`;

export const MobileOptions = styled.div`
	display: block;
	position: fixed;
	background: #000;
	width: 100%;
	height: 100vh;
	top: 0;
	z-index: 10000;

	@media (min-width: ${screenSizes.mediaS}px) {
	}
`;

export const MobileOptionHead = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const NavTabsMobile = styled.ul`
	list-style: none;
	transition: all 0.3s;
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: column;
	margin-top: 50px;
`;
export const NavTabMobile = styled.li<any>`
	text-align: center;
	padding: 10px;
	cursor: pointer;
	position: relative;
	@media (min-width: ${screenSizes.mediaXL}px) {
		margin-left: 20px;
	}

	a {
		font-family: SemiBold;
		font-style: normal;
		font-weight: 600;
		font-size: 4px;
		line-height: 15px;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: ${colors.white};
		opacity: 0.4;
		text-decoration: none;
		${(props) =>
			props.isActiveTab
				? `
        opacity: 1;
        color:${colors.neon};
    `
				: `
        color:${colors.black};
        opacity: 0.4;
      `}
	}
	&:hover {
		a {
			color: ${colors.neon};
			opacity: 1;
		}
	}
	img {
		position: absolute;
		top: 16px;
	}
`;

export const Separator = styled.div`
	background: rgba(255, 255, 255, 0.2);
	width: 0.5px;
	height: 20px;
	margin-top: 20px;
`;
