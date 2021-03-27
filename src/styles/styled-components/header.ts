import styled from "styled-components";
import burgersvg from "../../images/menu-burger.svg";
import closesvg from "../../images/close.svg";
export const HeaderInnerWrapper = styled.div`
	max-width: 1300px;
	height: 4em;
	margin: 0 auto;
	padding: 1em 0 1em 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 920px) {
		padding: 1em 1em 0 1em;
	}
`;

export const Header = styled.header`
	width: 100%;
	border-bottom: 1px solid #eaeaea;
	background-color: ${(props) =>
		props.color === "white" ? "#fff" : "#F8F6F3"};
	* {
		color: var(--e-global-color-link-nav);
		font-family: "Open Sans", sans-serif;
		font-size: 100%;
		text-decoration: none;
		outline: none;
		transition: all 0.2s linear;
	}
	*:hover {
		color: var(--e-global-color-accent);
	}
	@media (max-width: 920px) {
		border-bottom: 1px solid #eaeaea;
	}
`;
export const Nav = styled.nav`
	display: block;
	width: 48%;
	display: flex;
	justify-content: flex-start;
	@media (max-width: 920px) {
		display: none;
	}
`;
export const Ul = styled.ul`
	display: flex;
	padding-left: 0;
	li:first-child {
		padding-left: 0;
	}
`;
export const ListItem = styled.li`
	list-style: none;
	padding: 0 1.1em;
	text-align: center;
	a {
		position: relative;
	}
	svg {
		width: 1.4em;
		height: 1.4em;
		display: block;
	}
	svg:hover {
		color: var(--e-global-color-accent);
	}
	span {
		position: absolute;
		top: 21px;
		color: yellowgreen;
		right: -5px;
	}
`;

export const MobileNav = styled.nav`
	position: block;
	width: 100%;
	left: 0;
	top: 80px;
`;
export const MobileNavUl = styled.ul`
	height: 100%;
	padding: 0;
	margin: 0;
	@media (min-width: 920px) {
		display: none;
	}
`;
export const BurgerButton = styled.button`
	width: 40px;
	height: 40px;
	padding: 0em 0.5em 0 0.5em;
	background-color: var(--e-global-color-8BC34A);
	border: none;
	cursor: pointer;
	border-radius: 0.1em;
	background-image: url(${(props) =>
		props.burgerIcon ? closesvg : burgersvg});
	background-origin: content-box;
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	@media (min-width: 920px) {
		display: none;
	}
`;
