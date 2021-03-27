import * as React from "react";
import { Link } from "gatsby";
import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children, color }) => {
	return (
		<>
			<Header color={color}></Header>
			<main>{children}</main>
			<Footer></Footer>
		</>
	);
};

export default Layout;
