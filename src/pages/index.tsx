import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/Hero";
import Bestsellers from "../components/Bestsellers";
import BestPosts from "../components/BestPosts";
const Index = ({ location }) => {
	return (
		<Layout color="white">
			<SEO title="Home" />
			<Hero />
			<Bestsellers />
			<BestPosts />
		</Layout>
	);
};

export default Index;

// export const pageQuery = graphql`
// 	query {
// 		site {
// 			siteMetadata {
// 				title
// 			}
// 		}
// 		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
// 			nodes {
// 				excerpt
// 				fields {
// 					slug
// 				}
// 				frontmatter {
// 					date(formatString: "MMMM DD, YYYY")
// 					title
// 					description
// 				}
// 			}
// 		}
// 	}
// `;
