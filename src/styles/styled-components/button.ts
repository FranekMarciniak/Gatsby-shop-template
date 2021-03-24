import styled from "styled-components";
import { Link } from "gatsby";
export const ButtonLink = styled(Link)`
	padding: 15px 35px;
	background-color: var(--e-global-color-8BC34A);
	border-color: var(--e-global-color-8BC34A);
	border-radius: 60px;
	color: #fff;
	text-decoration: none;
	transition: all 0.3s;

	&:hover {
		background-color: #7baf42;
	}
`;
export const Button = styled.button`
	padding: 15px;
	margin: 0;
	background-color: var(--e-global-color-8BC34A);
	border: none;
	border-radius: 60px;
	color: #fff;
	text-decoration: none;
	transition: all 0.3s;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	cursor: pointer;
	svg {
		padding-right: 6px;
	}
	&:hover {
		background-color: #7baf42;
	}
	&:focus {
		outline: none;
	}
`;
export const ButtonLinkArrow = styled(ButtonLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	svg {
		padding-left: 6px;
	}
`;
export const ButtonLinkCircle = styled(Link)`
	background-color: #fff;
	padding: 8px;
	display: inline-block;
	margin: 0 5px;
	border: #8bc34a solid 1px;
	border-radius: 50%;
	color: #fff;
	text-decoration: none;
	transition: all 0.3s;
	svg {
		color: #8bc34a;
	}
	&:hover {
		background-color: #7baf42;
		transition: all 0.3s;
		svg {
			color: #fff;
			transition: all 0.3s;
		}
	}
`;
