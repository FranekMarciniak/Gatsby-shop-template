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
import { BsBagFill } from "react-icons/bs";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

function HeaderComponent({ color }): ReactElement {
	const [dropdown, setDropdown] = useState(false);
	const [nav, setNav] = useState(false);
	const navigation = [
		{ name: "home", path: "/", active: false, dropdown: null },
		{ name: "library", path: "/library", active: false, dropdown: null },
		{ name: "blog", path: "/blog", active: false, dropdown: null },
		// { name: "about us", path: "/about", active: false, dropdown: null },
		{ name: "contact", path: "/contact", active: false, dropdown: null },
		{
			name: "account",
			path: null,
			active: false,
			dropdown: [
				{
					name: "orders",
					path: "#",
					className: "snipcart-user-profile",
					active: false,
				},
				{
					name: "my account",
					className: "snipcart-edit-profile",
					path: "#",
					active: false,
				},
				{
					name: "cart",
					path: "#",
					className: "snipcart-checkout",
					active: false,
				},
			],
		},
	];
	return (
		<Header color={color}>
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
													<Link
														className={
															element.className
																? element.className
																: ""
														}
														to={element.path}
													>
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
							<div className="snipcart-summary">
								<span className="snipcart-total-items"></span>

								<a href="#" className="snipcart-checkout">
									<BsBagFill />
								</a>
							</div>
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
															<Link
																className={
																	ele.className
																		? ele.className
																		: ""
																}
																to={ele.path}
															>
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
