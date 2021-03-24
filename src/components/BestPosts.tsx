import React, { ReactElement } from "react";
import {
	Section,
	SectionInnerWrapper,
	BlogPostCard,
} from "../styles/styled-components/bestPosts";
import { ButtonLinkArrow } from "../styles/styled-components/button";
import { FaArrowRight } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";
function BestPosts(): ReactElement {
	const { allMdx } = useStaticQuery(
		graphql`
			query {
				allMdx(
					filter: {
						fileAbsolutePath: { regex: "/content/blog/" }
						frontmatter: { fetured: { eq: true } }
					}
				) {
					nodes {
						fileAbsolutePath
						frontmatter {
							title
							short
						}
						fields {
							slug
						}
						rawBody
					}
				}
			}
		`
	);
	allMdx;
	return (
		<Section>
			<SectionInnerWrapper>
				{allMdx.nodes.map((ele, i) => (
					<BlogPostCard key={i}>
						<h3>{ele.frontmatter.title}</h3>
						<p>{ele.frontmatter.short}</p>
						<ButtonLinkArrow to={ele.fields.slug}>
							See the post
							<FaArrowRight
								width="1em"
								alignmentBaseline="central"
							/>
						</ButtonLinkArrow>
					</BlogPostCard>
				))}
			</SectionInnerWrapper>
		</Section>
	);
}

export default BestPosts;
