import * as React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPostTemplate = ({ data, location, pageContext }) => {
	const post = data.mdx;
	const siteTitle = data.site.siteMetadata.title;

	return (
		<Layout>
			<SEO
				description={post.frontmatter.description || post.excerpt}
				title="Blog post"
			/>
			<article className="blog-post">
				<header>
					<h1 itemProp="headline">{post.frontmatter.title}</h1>
					<p>{post.frontmatter.date}</p>
				</header>
				<MDXRenderer>{post.body}</MDXRenderer>
			</article>
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
			}
			body
			slug
		}
	}
`;
