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
	align-items: center;
	justify-content: center;
	@media (max-width: 720px) {
		flex-direction: column;
	}
`;

export const ImageWrapper = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;

	padding: 15px;
	div {
		max-height: 320px;
	}
	@media (max-width: 720px) {
		width: 90%;
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
	@media (max-width: 720px) {
		width: 90%;
		p {
			text-align: center;
		}
	}
`;
