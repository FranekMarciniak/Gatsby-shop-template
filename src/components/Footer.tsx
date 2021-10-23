import React, { ReactElement, useState } from "react";
import {
	Footer,
	FooterInnerWrapper,
	UlWrapper,
	LogoWrapper,
	CopyrightWrapper,
} from "../styles/styled-components/footer";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

function FooterComponent(): ReactElement {
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
								path
							}
						}
					}
				}
			}
		`
	);
	const reduced = allMdx.edges.map((ele) => ele.node.frontmatter.category);

	const filtered = reduced
		.filter(function (item, pos) {
			return reduced.indexOf(item) == pos;
		})
		.splice(0, 4);

	return (
		<Footer>
			<FooterInnerWrapper>
				<UlWrapper>
					<ul>
						<li>
							<h4>Categories</h4>
						</li>
						{filtered.map((ele, i) => (
							<li key={i}>
								<Link to={"/library/category/" + ele}>
									{ele}
								</Link>
							</li>
						))}
					</ul>
					<ul>
						<li>
							<h4>Popular</h4>
						</li>
						<li>
							<Link to="#">Some popular</Link>
						</li>
						<li>
							<Link to="#">Some popular</Link>
						</li>
						<li>
							<Link to="#">Some popular</Link>
						</li>
						<li>
							<Link to="#">Some popular</Link>
						</li>
					</ul>
				</UlWrapper>
				<LogoWrapper>
					<StaticImage
						src={`../images/big_logo.png`}
						alt="logo"
					></StaticImage>
					<p>
						Porque seu tempo é importante. Guias de preparo para
						exames de certificação baseados em perguntas de exames
						reais.{" "}
					</p>
				</LogoWrapper>
				<UlWrapper>
					<ul>
						<li>
							<h4>Fast Links</h4>
						</li>
						<li>
							<Link to="/library">library</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/contact">Contact us</Link>
						</li>
						<li>
							<Link to="/cart">Cart</Link>
						</li>
					</ul>
					<ul>
						<li>
							<h4>Legal matters</h4>
						</li>
						<li>
							<Link to="#">dddddd</Link>
						</li>
						<li>
							<Link to="#">dddddd</Link>
						</li>
						<li>
							<Link to="#">dddddd</Link>
						</li>
						<li>
							<Link to="#">dddddd</Link>
						</li>
					</ul>
				</UlWrapper>
				<CopyrightWrapper>
					<p>Copyright claims</p>
				</CopyrightWrapper>
			</FooterInnerWrapper>
		</Footer>
	);
}

export default FooterComponent;
