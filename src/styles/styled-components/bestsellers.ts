import styled from "styled-components";
export const Section = styled.section`
	width: 100%;
	margin-top: 50px;
	text-align: center;
	h2 {
		font-size: 2.2em;
		font-weight: 600;
	}
`;
export const SectionInnerWrapper = styled.div`
	max-width: 1300px;
	margin: 0 auto;
	display: flex;
	flex-flow: wrap row;
	justify-content: space-between;
	@media (max-width: 920px) {
		justify-content: space-around;
	}
`;
