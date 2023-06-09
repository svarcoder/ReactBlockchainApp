import styled from "styled-components";
import { colors, screenSizes } from "../../../../../shared/style/theme";

export const ContainerWrap = styled.div`
	position: fixed;
	display: flex;
	margin-top: 60px;
`;

export const Input = styled.input`
	padding: 10px;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	width: 50px;
	margin: 10px;
	right: 0;
	left: 10px;
	border-radius: 10px;
	/* background: #9394a0; */
	@media (min-width: ${screenSizes.mediaS}px) {
		width: 200px;
		flex-direction: row;
		align-items: center;
	}
`;

export const Button = styled.button`
	cursor: pointer;

	margin-top: 20px;
	margin-bottom: 20px;
	margin-left: 10px;
	width: 80px;
	@media (min-width: ${screenSizes.mediaS}px) {
		width: 200px;
		margin-left: 20px;
		border-radius: 5px;
	}
	@media (min-width: ${screenSizes.mediaL}px) {
		margin-left: 20px;
	}
	@media (min-width: ${screenSizes.mediaXL}px) {
		margin-left: 20px;
	}
	@media (min-width: ${screenSizes.mediaXXL}px) {
		margin-left: 20px;
	}
`;
export const Status = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;
	margin-left: 20px;
	width: 50px;
	@media (min-width: ${screenSizes.mediaS}px) {
		width: 200px;
		margin-left: 20px;
	}
	@media (min-width: ${screenSizes.mediaL}px) {
		margin-left: 20px;
	}
	@media (min-width: ${screenSizes.mediaXL}px) {
		margin-left: 20px;
	}
	@media (min-width: ${screenSizes.mediaXXL}px) {
		margin-left: 20px;
	}
`;
