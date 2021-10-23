import styled from "styled-components";

export const Section = styled.section`
	width: 100%;
	margin-top: 50px;
`;
export const SectionInnerWrapper = styled.div`
	max-width: 1300px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	@media (max-width: 920px) {
		flex-flow: wrap column-reverse;
		justify-content: center;
	}
`;
export const ImageOuterWrapper = styled.div`
	width: 48%;
	padding-top: 1em;
	div {
		margin: auto 0;
	}
	@media (max-width: 1150px) {
		display: flex;
		align-items: center;
	}
	@media (max-width: 920px) {
		margin: 0 auto;
		width: 90%;
		justify-content: center;
	}
`;
export const TextContentWrapper = styled.div`
	width: 48%;
	h5 {
		font-size: 1.0625rem;
		margin: 1em 0;
	}
	h1 {
		font-size: 3.25rem;
		margin: 1rem 0;
	}
	p {
		font-size: 16px;
		line-height: 170%;
		margin-bottom: 35px;
	}
	@media (max-width: 920px) {
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		* {
			text-align: center;
		}
		a {
			margin: 0 auto;
		}
		h1 {
			font-size: 30px;
		}
		p {
			font-size: 14px;
		}
	}
`;
