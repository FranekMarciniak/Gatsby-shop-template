import styled from "styled-components";

export const ProductCard = styled.div`
	box-shadow: 0 1px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease-in-out;
	text-align: center;
	box-sizing: border-box;
	&:hover {
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1);
	}
`;

export const ProductCardBestseller = styled(ProductCard)`
	width: calc(25% - 15px);
	* {
		text-decoration: none;
		color: black;
	}
	p {
		margin-top: 0;
	}
	@media (max-width: 920px) {
		width: calc(50% - 15px);
		max-width: 310px;
		margin-top: 15px;
	}
`;
export const ProductCardLibrary = styled(ProductCard)`
	width: calc(33% - 15px);
	display: block;
	* {
		text-decoration: none;
		color: black;
	}
	p {
		margin-top: 0;
	}
	a {
		z-index: 5;
	}
	@media (max-width: 920px) {
		width: calc(50% - 15px);
		max-width: 310px;
		margin-top: 15px;
	}
`;
export const ProductCardSubheader = styled.p`
	opacity: 0.6;
	padding-top: 5px;
`;
export const ProductCardHeader = styled.h3`
	font-size: 1.3em;
	a {
		text-decoration: none;
		color: #000;
	}
`;
export const ProductCardPrice = styled.p`
	margin-bottom: 15px;
	font-weight: 600;
`;
