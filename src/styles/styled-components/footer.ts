import styled from "styled-components";

export const Footer = styled.footer`
	width: 100%;
	background-color: #001524;
`;
export const FooterInnerWrapper = styled.div`
	max-width: 1300px;
	height: 100%;
	margin: 0 auto;
	display: flex;
	flex-flow: wrap row;
	justify-content: space-between;
	border-bottom: 1px solid #eaeaea;

	@media (max-width: 920px) {
	}
`;

export const UlWrapper = styled.div`
	width: 30%;
	display: flex;
	margin-top: 75px;
	* {
		transition: all 0.2s linear;
	}
	h4 {
		font-size: 1.2em;
	}
	ul {
		width: 50%;
		padding: 0;
	}
	li:first-child {
		font-weight: 600;
	}
	li {
		margin-top: 5px;
		list-style: none;
		text-align: center;
		color: white;
		padding: 5px 0;
	}
	a,
	p {
		text-decoration: none;
		color: rgba(255, 255, 255, 0.76);
		text-align: center;
	}
	a:hover {
		color: var(--e-global-color-8BC34A);
	}
	@media (max-width: 920px) {
		width: 90%;
		margin: 0 auto;
	}
`;
export const LogoWrapper = styled(UlWrapper)`
	display: flex;
	justify-content: center;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	margin-top: 50px;

	div {
		max-width: 180px !important;
		max-height: 180px !important;
	}
`;
export const CopyrightWrapper = styled.div`
	width: 100%;
	height: 50px;
	border-top: #3d3d3d 1px solid;
	margin-top: 30px;
	color: rgba(255, 255, 255, 0.76);
	text-align: center;
`;
