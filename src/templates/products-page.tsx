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
const PageTemplate = ({ data, location, pageContext }) => {
	// const post = data.mdx;
	const { allMdx } = data;

	return (
		<Layout>
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
							<Link to={ele.frontmatter.path}>
								{ele.frontmatter.title}
							</Link>
						</ProductCardHeader>
						<ProductCardPrice>
							{ele.frontmatter.price}$
						</ProductCardPrice>
					</ProductCardLibary>
				))}
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
							gatsbyImageData(width: 310)
						}
					}
					path
				}
			}
		}
	}
`;
