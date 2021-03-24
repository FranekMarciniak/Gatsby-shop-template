import styled from "styled-components";

export const OuterWrapper = styled.div`
	width: 100%;
	padding: 50px 0;
	background-color: #f5f5f5;
`;
export const Article = styled.article`
	max-width: 1300px;
	height: 100%;
	box-sizing: border-box;
	padding: 2% 8%;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	background-color: #fff;
	flex-wrap: wrap;
	@media (max-width: 920px) {
	}
`;
export const ImagesWrapper = styled.div`
	width: 48%;
	height: 600px;
	padding: 15px 2% 15px 0px;
	box-sizing: content-box;
	ul {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 0;
	}
	li {
		margin-top: 5px;
		list-style: none;
		width: 22%;
		text-align: center;
		cursor: pointer;
		&:hover {
			opacity: 1 !important;
		}
		div {
			width: 100%;
			max-width: 130px;
		}
	}
`;
export const ProductInfoWrapper = styled.div`
	width: 48%;
	height: 600px;
	padding: 15px 0px 15px 2%;
	box-sizing: content-box;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;
export const ProductNav = styled.nav`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const SectionBody = styled.section`
	width: 100%;
`;
export const Breadcrumbs = styled.p`
	width: 70%;
	color: var(--e-global-color-text);
	a {
		text-decoration: none;
		color: var(--e-global-color-text);
	}
`;
export const PrevAndNext = styled.div`
	width: 30%;
`;
