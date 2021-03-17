import styled from "styled-components";
import downarrowSVG from "../../images/down-arrow.svg";
import rightarrowSVG from "../../images/right-arrow.svg";
export const DropdownContent = styled.ul`
	display: none;
	position: absolute;
	left: -20px;
	background-color: #fff;
	width: 206px;
	margin-top: 22px;
	padding: 0;
	text-indent: 0;
	box-shadow: 0 4px 10px -2px rgba(0, 0, 0, 0.1);
	border: 1px solid #eaeaea;
`;

export const DropdownButton = styled.a`
	width: max-content;
	cursor: pointer;
	position: relative;
	&::before {
		content: "";
		position: absolute;
		bottom: -20px;
		min-width: 130%;
		height: 27px;
	}
	&::after {
		content: "";
		position: absolute;
		right: -15px;
		top: 8px;
		background-image: url(${downarrowSVG});
		width: 9px;
		height: 9px;
	}
	&::before:hover,
	&::after:hover ${DropdownContent} {
		display: block;
	}
	&:focus ${DropdownContent} {
		display: block;
	}
	&:hover ${DropdownContent} {
		display: block;
	}
`;
export const DropdownLi = styled.li`
	list-style: none;
	text-decoration: none;
	font-size: 1em;
	border-bottom: 1px solid #eaeaea;
	&:first-child {
		border-top: 1px solid #eaeaea;
	}
	&:last-child {
		border: none;
	}
	a {
		display: inline-block;
		width: 100%;
		height: 100%;
		padding: 1em 1em 1em 1em;
	}
`;
export const NestedDropdownButton = styled.a`
	border-bottom: 1px solid #eaeaea;
	&::after {
		content: "";
		position: absolute;
		right: 0;
		background-image: url(${downarrowSVG});
		width: 14px;
		height: 14px;
		margin-right: 1em;
	}
`;
export const NestedDropdownLi = styled(DropdownLi)`
	position: relative;
	a {
		padding: 1em 1em 1em 2em;
	}
	a:before {
		content: "";
		position: absolute;
		left: 0;
		top: 22px;
		background-image: url(${rightarrowSVG});
		width: 9px;
		height: 9px;
		margin-left: 1em;
	}
	&:last-child {
		border-bottom: 1px solid #eaeaea !important;
	}
`;
