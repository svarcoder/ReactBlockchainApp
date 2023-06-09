import styled from "styled-components";
import { colors, screenSizes } from "./theme";

export interface ButtonAreaProps {
	gradient?: string;
	disabled?: boolean;
}
export const MainContainer = styled.div`
	padding-top: 100px;
`;

export const BasicCard = styled.div`
	background: ${colors.cardBackground};
	border-radius: 12px;
	padding: 20px 10px;
	width: auto;
	margin: 20px 15px;
	box-shadow: 0px 40px 40px -20px rgba(0, 0, 0, 0.6);
	position: relative;
	@media (min-width: ${screenSizes.mediaXS}px) {
		margin: 20px;
		padding: 15px;
	}

	@media (min-width: ${screenSizes.mediaS}px) {
		width: 455px;
		margin: 10px auto;
	}
`;
export const BasicCardHeader = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	h2 {
		font-family: SemiBold;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 24px;
		margin: 0;
		color: ${colors.white};
	}
	img {
		height: 22px;
		cursor: pointer;
	}
`;

export const ThreeColumns = styled.div`
	display: grid;
	grid-gap: 0px;
	grid-template-columns: repeat(1, 1fr);
	@media (min-width: ${screenSizes.mediaS}px) {
		grid-gap: 25px;
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: ${screenSizes.mediaL}px) {
		grid-gap: 25px;
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: ${screenSizes.mediaXL}px) {
		grid-gap: 25px;
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const TwoColumns = styled.div`
	display: grid;
	grid-gap: 0px;
	grid-template-columns: repeat(1, 1fr);
	@media (min-width: ${screenSizes.mediaS}px) {
		grid-gap: 25px;
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: ${screenSizes.mediaL}px) {
		grid-gap: 25px;
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: ${screenSizes.mediaXL}px) {
		grid-gap: 25px;
		grid-template-columns: repeat(2, 1fr);
	}
`;
