import styled from "styled-components";
export const Section = styled.section`
	background-color: #f8f6f3;
	position: relative;
	padding: 140px 0;

	h1 {
		font-size: 3.25rem;
		text-align: center;
		margin-top: 0;
	}
`;
export const InfomationContainer = styled.div`
	max-width: 1140px;
	background-color: white;
	margin: -75px auto 100px auto;
	z-index: 100;
	position: relative;
	box-shadow: 0px 0px 50px -10px rgba(0, 0, 0, 0.13);
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	padding: 20px 30px;
	@media (max-width: 920px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const InformationItem = styled.div`
	width: 29%;
	height: 150px;
	border: 1px solid rgba(122, 122, 122, 0.25);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	svg {
		width: 2em;
		height: 2em;
		color: var(--e-global-color-8BC34A);
	}
	p {
		margin: 10px 10px;
		text-align: center;
	}
	@media (max-width: 920px) {
		width: 90%;
	}
`;
