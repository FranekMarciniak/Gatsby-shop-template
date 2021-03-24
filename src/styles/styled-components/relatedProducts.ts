import styled from "styled-components";
export const Section = styled.section`
	width: 100%;
	margin-top: 50px;
	border-top: 1px solid #eaeaea;
`;
export const SectionInnerWrapper = styled.div`
	max-width: 1300px;
	margin: 50px auto;
	display: flex;
	flex-flow: wrap row;
	justify-content: space-evenly;
	@media (max-width: 920px) {
		justify-content: space-around;
	}
`;
