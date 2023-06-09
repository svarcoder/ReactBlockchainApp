import styled from "styled-components";
import { colors, screenSizes } from "../../../../shared/style/theme";

export const ContainerWrap = styled.div`
	display: block;
	justify-content: flex-start;
`;

export const TokenTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;
	margin-left: 20px;
	display: block;
	justify-content: flex-start;
	@media (min-width: ${screenSizes.mediaS}px) {
		flex-direction: row;
		align-items: center;
	}
`;

export const TokenBody = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;
	margin-left: 20px;
	/* width: 200px; */
	@media (min-width: ${screenSizes.mediaS}px) {
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
