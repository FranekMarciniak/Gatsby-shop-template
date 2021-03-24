import * as React from "react";
import { Link, graphql } from "gatsby";

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
			<article
				className="blog-post"
				itemScope
				itemType="http://schema.org/Article"
			>
				<header>
					<h1 itemProp="headline">{post.frontmatter.title}</h1>
					<p>{post.frontmatter.date}</p>
				</header>
				<section
					dangerouslySetInnerHTML={{ __html: post.html }}
					itemProp="articleBody"
				/>
				<hr />
			</article>
			<nav className="blog-post-nav">
				<ul
					style={{
						display: `flex`,
						flexWrap: `wrap`,
						justifyContent: `space-between`,
						listStyle: `none`,
						padding: 0,
					}}
				>
					<li>
						{pageContext.previous && (
							<Link
								to={pageContext.previous.fields.slug}
								rel="prev"
							>
								← {pageContext.previous.frontmatter.title}
							</Link>
						)}
					</li>
					<li>
						{pageContext}

						{pageContext.next && (
							<Link to={pageContext.next.fields.slug} rel="next">
								{pageContext.next.frontmatter.title} →
							</Link>
						)}
					</li>
				</ul>
			</nav>
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
