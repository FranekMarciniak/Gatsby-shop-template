import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ location, title, children }) => {
	return (
		<>
			<main>{children}</main>
			<footer>
				© {new Date().getFullYear()}, Built with
				{` `}
				<a href="https://www.gatsbyjs.com">Gatsby</a>
			</footer>
		</>
	);
};

export default Layout;
