import styled from "styled-components";
export const OuterWrapper = styled.div`
	width: 100%;
	background-color: #f8f6f3;
	padding: 15px 0;
`;
export const Section = styled.section`
	max-width: 1300px;
	margin: 40px auto;
	background-color: #fff;
	@media (max-width: 920px) {
		width: 90%;
	}
`;
export const InnerWrapper = styled.div`
	padding: 35px 106px;
	@media (max-width: 920px) {
		padding: 0 0;
	}
`;
export const FilteringWrapper = styled.div`
	width: 100%;
	height: 100px;
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const ProductsWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-flow: wrap row;
	div {
		margin: 15px 5px;
	}
	@media (max-width: 920px) {
		justify-content: space-between;
	}
`;
