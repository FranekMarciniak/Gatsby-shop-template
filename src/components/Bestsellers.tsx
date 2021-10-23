import React, { ReactElement } from "react";
import {
	Section,
	SectionInnerWrapper,
} from "../styles/styled-components/bestsellers";
import {
	ProductCardBestseller,
	ProductCardHeader,
	ProductCardPrice,
	ProductCardSubheader,
} from "../styles/styled-components/product-card";
import {
	StaticImage,
	GatsbyImage,
	getImage,
	IGatsbyImageData,
} from "gatsby-plugin-image";
import { graphql, Link, useStaticQuery } from "gatsby";
function Bestsellers(): ReactElement {
	const { allMdx } = useStaticQuery(
		graphql`
			query {
				allMdx(
					filter: {
						fileAbsolutePath: { regex: "/content/products/" }
						frontmatter: { best_selling: { eq: true } }
					}
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
		`
	);
	return (
		<Section>
			<h2>Produtos Best-Sellers</h2>
			<SectionInnerWrapper>
				{allMdx.nodes.map((ele, i) => (
					<ProductCardBestseller key={i}>
						<Link to={"/library/product" + ele.frontmatter.path}>
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
					</ProductCardBestseller>
				))}
			</SectionInnerWrapper>
		</Section>
	);
}

export default Bestsellers;
