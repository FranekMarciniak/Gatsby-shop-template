import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProductsLayout from "../components/ProductsLayout";
import {
	ProductCardLibary,
	ProductCardHeader,
	ProductCardPrice,
	ProductCardSubheader,
} from "../styles/styled-components/product-card";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { ButtonLinkSquare } from "../styles/styled-components/button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const PageTemplate = ({ data, location, pageContext }) => {
	// const post = data.mdx;
	const { allMdx } = data;
	return (
		<Layout color="white">
			<SEO description="Products page" title="Products page" />
			<ProductsLayout>
				{allMdx.nodes.map((ele, i) => (
					<ProductCardLibary key={i}>
						<GatsbyImage
							image={
								getImage(
									ele.frontmatter.main_image
								) as IGatsbyImageData
							}
							alt="product"
						></GatsbyImage>
						<ProductCardSubheader>Best seller</ProductCardSubheader>
						<ProductCardHeader>
							<Link to={"/libary/product" + ele.frontmatter.path}>
								{ele.frontmatter.title}
							</Link>
						</ProductCardHeader>
						<ProductCardPrice>
							{ele.frontmatter.price}$
						</ProductCardPrice>
					</ProductCardLibary>
				))}
				{pageContext.previousPagePath && (
					<ButtonLinkSquare
						to={"/" + pageContext.previousPagePath}
						rel="prev"
					>
						<FaChevronLeft />
					</ButtonLinkSquare>
				)}

				{pageContext.nextPagePath && (
					<ButtonLinkSquare
						to={"/" + pageContext.nextPagePath}
						rel="next"
					>
						<FaChevronRight />
					</ButtonLinkSquare>
				)}
			</ProductsLayout>
		</Layout>
	);
};

export default PageTemplate;

export const pageQuery = graphql`
	query($skip: Int!, $limit: Int!) {
		allMdx(
			filter: { fileAbsolutePath: { regex: "/content/products/" } }
			sort: { fields: [frontmatter___date], order: DESC }
			skip: $skip
			limit: $limit
		) {
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
