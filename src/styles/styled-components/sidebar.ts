import styled from "styled-components";
export const Sidebar = styled.nav`
	height: calc(100% + 100px);
	position: fixed;
	top: 0;
	width: 15vw;
	visibility: ${(props) => (props.open ? "visible" : "hidden")};
	transform: translateX(${(props) => (props.open ? "0" : "-15vw")});
	overflow: hidden;
	background-color: #fff;
	z-index: 3;
	transition: 0.3s ease-in-out;
	box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.4);
	h2 {
		text-align: center;
	}
	ul {
		list-style: none;
		padding: 35px;
	}
	li {
		display: flex;
		justify-content: space-between;
		padding: 3px 0;
		a {
			text-decoration: none;
			color: var(--e-global-color-8BC34A);
		}
	}
`;
export const Background = styled.div`
	width: 100vw;
	height: calc(100% + 100px);
	top: 0;
	z-index: 2;
	background: rgba(0, 0, 0, 0.4);
	position: fixed;
	visibility: ${(props) => (props.open ? "visible" : "hidden")};
	opacity: ${(props) => (props.open ? "1" : "0")};
	transition: 0.25s ease-in-out;
	cursor: pointer;
`;
