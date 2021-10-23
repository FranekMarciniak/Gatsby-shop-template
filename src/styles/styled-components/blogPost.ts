import styled from "styled-components";
export const ArticleWrapper = styled.div`
	width: 100%;
	background-color: #fff;
	display: flex;
	flex-flow: wrap;
	justify-content: center;
	overflow: hidden;
`;
export const Article = styled.article`
	max-width: 600px;
	/* margin: 30px auto; */
	word-break: break-all;
	h1 {
		font-size: 30px;
	}
`;
export const Header = styled.header`
	width: 100%;
	background-color: #f5f5f5;
	padding: 100px 0;
	h1 {
		font-size: 3.25rem;
	}
	p {
		line-height: 160%;
	}
	span {
		letter-spacing: 2.7px;
		display: block;
		max-width: 45%;
		position: relative;
		margin: 0 auto;
		font-size: 1em;
		width: max-content;
		&:before {
			display: block;
			content: "";
			border-bottom: 0;
			border-top: solid 1.5px black;
			width: 15px;
			position: absolute;
			top: 50%;
			left: -17%;
		}
		&:after {
			display: block;
			content: "";
			border-bottom: 0;
			border-top: solid 1.5px black;
			width: 15px;
			position: absolute;
			top: 50%;
			right: -15%;
		}
	}
`;
export const HeaderInnerWrapper = styled.div`
	width: 800px;
	text-align: center;
	margin: 0 auto;
`;
