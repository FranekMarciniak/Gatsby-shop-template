import * as React from "react";
import { Link } from "gatsby";
import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }) => {
	return (
		<>
			<Header></Header>
			<main>{children}</main>
			<Footer></Footer>
		</>
	);
};

export default Layout;
