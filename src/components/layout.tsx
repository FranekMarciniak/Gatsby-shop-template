import * as React from "react";
import { Link } from "gatsby";
import Header from "./Header";
const Layout = ({ children }) => {
	return (
		<>
			<Header></Header>
			<main>{children}</main>
			<footer></footer>
		</>
	);
};

export default Layout;
