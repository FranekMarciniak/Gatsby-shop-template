import React, { ReactElement, useState } from "react";
import {
	OuterWrapper,
	Section,
	InnerWrapper,
	FilteringWrapper,
	ProductsWrapper,
} from "../styles/styled-components/productsLayout";
import { Button } from "../styles/styled-components/button";
import { FiMenu } from "react-icons/fi";
import { Sidebar, Background } from "../styles/styled-components/sidebar";
import { graphql, useStaticQuery, Link } from "gatsby";
function ProductsLayout({ children }): ReactElement {
	const { allMdx } = useStaticQuery(
		graphql`
			query {
				allMdx(
					sort: { fields: [frontmatter___date], order: DESC }
					filter: {
						fileAbsolutePath: { regex: "/content/products/" }
					}
				) {
					edges {
						node {
							frontmatter {
								category
							}
						}
					}
				}
			}
		`
	);
	const reduced = allMdx.edges
		.map((ele) => ele.node.frontmatter.category)
		.reduce((a, b) => {
			return b in a ? a[b]++ : (a[b] = 1), a;
		}, {});

	const [open, setOpen] = useState(false);
	return (
		<>
			<Sidebar open={open}>
				<h2>Product categories</h2>
				<ul>
					{Object.entries(reduced).map((ele, i) => (
						<li key={i}>
							<Link to={"/library/category/" + ele[0]}>
								{ele[0]}
							</Link>
							<span>({ele[1] as string})</span>
						</li>
					))}
				</ul>
			</Sidebar>
			<Background open={open} onClick={() => setOpen(false)} />
			<OuterWrapper>
				<Section>
					<InnerWrapper>
						<FilteringWrapper>
							<Button onClick={() => setOpen(true)}>
								<FiMenu />
								filter
							</Button>
						</FilteringWrapper>
						<ProductsWrapper>{children}</ProductsWrapper>
					</InnerWrapper>
				</Section>
			</OuterWrapper>
		</>
	);
}

export default ProductsLayout;
