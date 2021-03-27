import styled from "styled-components";

export const BlogPostsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	& > div:nth-child(odd) {
		background-color: #f8f6f3;
	}
`;
export const BlogPostWrapper = styled.div`
	width: 100%;
`;
export const BlogPost = styled.article`
	max-width: 1300px;
	margin: 0 auto;
	width: 100%;
	display: flex;
`;

export const ImageWrapper = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 15px;
	div {
		max-height: 320px;
	}
`;
export const TextWrapper = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	h3 {
		color: #3a3a3a;
		font-size: 1.6em;
		font-weight: 400;
	}
`;
