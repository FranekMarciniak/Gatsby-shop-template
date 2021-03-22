import React, { ReactElement, useState } from "react";
import {
	Header,
	HeaderInnerWrapper,
	Nav,
	Ul,
	ListItem,
	MobileNav,
	MobileNavUl,
	BurgerButton,
} from "../styles/styled-components/header";
import {
	DropdownButton,
	DropdownContent,
	DropdownLi,
	NestedDropdownLi,
	NestedDropdownButton,
} from "../styles/styled-components/dropdown";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

function HeaderComponent(): ReactElement {
	const [dropdown, setDropdown] = useState(false);
	const [nav, setNav] = useState(false);
	const navigation = [
		{ name: "home", path: "/", active: false, dropdown: null },
		{ name: "libary", path: "/libary", active: false, dropdown: null },
		{ name: "about us", path: "/about", active: false, dropdown: null },
		{ name: "contact", path: "/contact", active: false, dropdown: null },
		{
			name: "account",
			path: null,
			active: false,
			dropdown: [
				{
					name: "my account",
					path: "/account",
					active: false,
				},
				{
					name: "cart",
					path: "/cart",
					active: false,
				},
			],
		},
	];
	return (
		<Header>
			<HeaderInnerWrapper>
				{/* logo for the header */}
				<StaticImage
					src="../images/logo.png"
					placeholder="blurred"
					alt="logo"
					layout="fixed"
					width={155}
					height={26}
				></StaticImage>
				{/* Nav for the desktop site */}
				<Nav>
					<Ul>
						{navigation.map((ele, i) => (
							<ListItem key={i}>
								{!ele.dropdown ? (
									<Link to={ele.path}>{ele.name}</Link>
								) : (
									/*Whenever this button is hovered the dropdown will open */
									<DropdownButton href="#">
										{ele.name}
										<DropdownContent>
											{ele.dropdown.map((element, i) => (
												<DropdownLi key={i}>
													<Link to={element.path}>
														{element.name}
													</Link>
												</DropdownLi>
											))}
										</DropdownContent>
									</DropdownButton>
								)}
							</ListItem>
						))}
						{/*Here will be a cart component in the future */}
						<ListItem>
							<Link to={"/cart"}>CART</Link>
						</ListItem>
					</Ul>
				</Nav>
				<BurgerButton
					onClick={() => setNav(!nav)}
					open={nav}
					aria-label="show dropdown menu"
					burgerIcon={nav}
				></BurgerButton>
			</HeaderInnerWrapper>
			{/* Nav for the mobile site */}
			<MobileNav>
				<MobileNavUl>
					{nav
						? navigation.map((ele, i) => (
								<DropdownLi key={i}>
									{!ele.dropdown ? (
										<Link to={ele.path}>{ele.name}</Link>
									) : (
										<>
											<NestedDropdownButton
												href="#"
												onClick={() =>
													setDropdown(!dropdown)
												}
											>
												{ele.name}
											</NestedDropdownButton>
											{dropdown
												? ele.dropdown.map((ele, i) => (
														<NestedDropdownLi
															as="div"
															key={i}
														>
															<Link to={ele.path}>
																{ele.name}
															</Link>
														</NestedDropdownLi>
												  ))
												: null}
										</>
									)}
								</DropdownLi>
						  ))
						: null}
				</MobileNavUl>
			</MobileNav>
		</Header>
	);
}

export default HeaderComponent;
