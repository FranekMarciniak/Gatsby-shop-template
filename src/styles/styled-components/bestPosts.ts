import styled from "styled-components";
export const Section = styled.section`
	width: 100%;
	margin-top: 100px;
	background-color: #f8f6f3;
	padding: 100px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	h2 {
		font-size: 2.2em;
		font-weight: 600;
		margin-top: 0;
	}
`;
export const SectionInnerWrapper = styled.div`
	max-width: 1300px;
	display: flex;
	justify-content: space-between;
	flex-flow: row wrap;
	padding: 0 15px;
	height: 100%;
	@media (max-width: 920px) {
		justify-content: space-around;
	}
`;
export const BlogPostCard = styled.article`
	box-shadow: 0px 0px 10px 0px rgba(176, 180, 183, 0.17);
	background-color: #fff;
	width: 27%;
	display: flex;
	padding: 20px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	height: 400px;
	h3 {
		font-size: 1.5rem;
	}
	p {
		line-height: 25px;
		font-size: 1.1rem;
	}
	@media (max-width: 920px) {
		width: 90%;
		margin-top: 20px;
	}
`;
