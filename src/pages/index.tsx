import * as React from "react";
import BestPosts from "../components/BestPosts";
import Bestsellers from "../components/Bestsellers";
import Hero from "../components/Hero";
import Layout from "../components/layout";
import SEO from "../components/seo";

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
