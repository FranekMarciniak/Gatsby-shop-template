import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { ButtonLink } from "../styles/styled-components/button";
import {
	BlogPostsWrapper,
	BlogPost,
	BlogPostWrapper,
	ImageWrapper,
	TextWrapper,
} from "../styles/styled-components/blogPostsPage";
const PageTemplate = ({ data, location, pageContext }) => {
	const post = data.mdx;
	const { allMdx } = data;
	console.log(allMdx);
	return (
		<Layout color="white">
			<SEO description="Blog page" title="Blog page" />
			<BlogPostsWrapper>
				{allMdx.nodes.map((ele) => (
					<BlogPostWrapper>
						<BlogPost>
							<ImageWrapper>
								<GatsbyImage
									image={
										getImage(
											ele.frontmatter.thumbnail
										) as IGatsbyImageData
									}
									alt="blog post thumbnail"
								/>
							</ImageWrapper>
							<TextWrapper>
								<h3>{ele.frontmatter.title}</h3>
								<p>{ele.frontmatter.shortCard}</p>
								<ButtonLink to={ele.fields.slug}>
									Read more
								</ButtonLink>
							</TextWrapper>
						</BlogPost>
					</BlogPostWrapper>
				))}
			</BlogPostsWrapper>
		</Layout>
	);
};

export default PageTemplate;

export const pageQuery = graphql`
	query($skip: Int!, $limit: Int!) {
		allMdx(
			filter: { fileAbsolutePath: { regex: "/content/blog/" } }
			sort: { fields: [frontmatter___date], order: DESC }
			skip: $skip
			limit: $limit
		) {
			nodes {
				fileAbsolutePath
				fields {
					slug
				}
				frontmatter {
					title
					thumbnail {
						childImageSharp {
							gatsbyImageData
						}
					}

					shortCard
				}
			}
		}
	}
`;
