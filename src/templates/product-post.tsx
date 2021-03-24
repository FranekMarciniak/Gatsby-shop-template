import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import {
	OuterWrapper,
	Article,
	ImagesWrapper,
	ProductInfoWrapper,
	SectionBody,
	ProductNav,
	Breadcrumbs,
	PrevAndNext,
} from "../styles/styled-components/productPost";
import { Button, ButtonLinkCircle } from "../styles/styled-components/button";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

const ProductTemplate = ({ data, location, pageContext }) => {
	const post = data.mdx;
	const related = data.allMdx.nodes;
	const siteTitle = data.site.siteMetadata.title;
	post.frontmatter.category;
	const [currentPicture, setCurrentPicture] = useState(0);
	const images = [
		getImage(post.frontmatter.main_image),
		...post.frontmatter.other_images.map((ele) =>
			getImage(ele.childrenImageSharp[0].gatsbyImageData)
		),
	];
	return (
		<Layout>
			<SEO
				description={post.frontmatter.description || post.excerpt}
				title={post.frontmatter.title}
			/>
			<OuterWrapper>
				<Article>
					{/* <MDXRenderer>{post.body}</MDXRenderer> */}
					<ImagesWrapper>
						<GatsbyImage
							image={images[currentPicture] as IGatsbyImageData}
							alt="product"
						></GatsbyImage>
						<ul>
							{images.map((ele, i) => (
								<li
									style={{
										opacity:
											i === currentPicture ? "1" : "0.6",
									}}
								>
									<GatsbyImage
										key={i}
										image={ele as IGatsbyImageData}
										alt="product"
										onClick={() => setCurrentPicture(i)}
									></GatsbyImage>
								</li>
							))}
						</ul>
					</ImagesWrapper>
					<ProductInfoWrapper>
						<ProductNav>
							<Breadcrumbs>
								<Link to="/">Home</Link> /{" "}
								<Link
									to={
										"/libary/category/" +
										post.frontmatter.category
									}
								>
									{post.frontmatter.category[0].toUpperCase() +
										post.frontmatter.category.substring(1)}
								</Link>{" "}
								/{" "}
								<Link to={location.pathname}>
									{post.frontmatter.title}
								</Link>
							</Breadcrumbs>
							<PrevAndNext>
								{pageContext.previous && (
									<ButtonLinkCircle
										to={
											"/libary/product" +
											pageContext.previous.frontmatter
												.path
										}
										rel="prev"
									>
										<FaChevronLeft />
									</ButtonLinkCircle>
								)}

								{pageContext.next && (
									<ButtonLinkCircle
										to={
											"/libary/product" +
											pageContext.next.frontmatter.path
										}
										rel="next"
									>
										<FaChevronRight />
									</ButtonLinkCircle>
								)}
							</PrevAndNext>
						</ProductNav>
						<h1>{post.frontmatter.title}</h1>
						<p>
							<strong>{post.frontmatter.price}$</strong>
						</p>
						<p>{post.frontmatter.short}</p>
						<Button>Add to cart</Button>
					</ProductInfoWrapper>
					<SectionBody>
						<MDXRenderer>{post.body}</MDXRenderer>
					</SectionBody>
				</Article>
			</OuterWrapper>
		</Layout>
	);
};

export default ProductTemplate;

export const pageQuery = graphql`
	query($slug: String!, $related: [Int!]) {
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
				path
				price
				short
				category
				main_image {
					childImageSharp {
						gatsbyImageData(placeholder: BLURRED)
					}
				}
				other_images {
					childrenImageSharp {
						gatsbyImageData(placeholder: BLURRED)
					}
				}
			}
			body
			slug
		}
		allMdx(filter: { frontmatter: { id: { in: $related } } }) {
			nodes {
				fileAbsolutePath
				frontmatter {
					title
					best_selling
					price
					main_image {
						childImageSharp {
							gatsbyImageData
						}
					}
					path
				}
			}
		}
	}
`;

{
	/* <nav className="blog-post-nav">
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
						to={pageContext.previous.frontmatter.path}
						rel="prev"
					>
						← {pageContext.previous.frontmatter.title}
					</Link>
				)}
			</li>
			<li>
				{(pageContext)}
	
				{pageContext.next && (
					<Link
						to={pageContext.next.frontmatter.path}
						rel="next"
					>
						{pageContext.next.frontmatter.title} →
					</Link>
				)}
			</li>
		</ul>
	</nav> */
}
