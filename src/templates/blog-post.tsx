import * as React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {
	ArticleWrapper,
	Article,
	Header,
	HeaderInnerWrapper,
} from "../styles/styled-components/blogPost";
const BlogPostTemplate = ({ data, location, pageContext }) => {
	const post = data.mdx;
	const siteTitle = data.site.siteMetadata.title;
	return (
		<Layout color="white">
			<SEO
				description={post.frontmatter.description || post.excerpt}
				title="Blog post"
			/>
			<ArticleWrapper>
				<Header>
					<HeaderInnerWrapper>
						<span>{post.frontmatter.description}</span>
						<h1>{post.frontmatter.title}</h1>
						<p>{post.frontmatter.shortPost}</p>
					</HeaderInnerWrapper>
				</Header>
				<Article>
					<MDXRenderer style={{ width: "800px" }}>
						{post.body}
					</MDXRenderer>
				</Article>
			</ArticleWrapper>
		</Layout>
	);
};

export default BlogPostTemplate;

export const pageQuery = graphql`
	query($slug: String!) {
		site {
			siteMetadata {
				title
			}
		}
		mdx(fields: { slug: { eq: $slug } }) {
			id
			excerpt(pruneLength: 160)
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				description
				shortPost
			}
			body
			slug
		}
	}
`;
