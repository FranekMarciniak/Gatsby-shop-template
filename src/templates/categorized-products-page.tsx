import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProductsLayout from "../components/ProductsLayout";
import {
	ProductCardLibrary,
	ProductCardHeader,
	ProductCardPrice,
	ProductCardSubheader,
} from "../styles/styled-components/product-card";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { ButtonLinkSquare } from "../styles/styled-components/button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PaginationNavigation from "../components/PaginationNavigation";
const PageTemplate = ({ data, location, pageContext }) => {
	// const post = data.mdx;
	const { allMdx } = data;
	return (
		<Layout color="white">
			<ProductsLayout>
				{allMdx.nodes.map((ele, i) => (
					<ProductCardLibrary key={i}>
						<Link
							to={
								"/library/product" +
								pageContext.category +
								ele.frontmatter.path
							}
						>
							<GatsbyImage
								image={
									getImage(
										ele.frontmatter.main_image
									) as IGatsbyImageData
								}
								alt="product"
							></GatsbyImage>

							<ProductCardSubheader>
								Best seller
							</ProductCardSubheader>
							<ProductCardHeader>
								{ele.frontmatter.title}
							</ProductCardHeader>
							<ProductCardPrice>
								{ele.frontmatter.price}$
							</ProductCardPrice>
						</Link>
					</ProductCardLibrary>
				))}
				<PaginationNavigation
					pageContext={pageContext}
					category={pageContext.category}
					page={"library"}
				/>
			</ProductsLayout>
		</Layout>
	);
};

export default PageTemplate;

export const pageQuery = graphql`
	query($skip: Int!, $limit: Int!, $category: String!) {
		allMdx(
			sort: { fields: [frontmatter___date], order: DESC }
			skip: $skip
			limit: $limit
			filter: { frontmatter: { category: { eq: $category } } }
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
