import React, { ReactElement } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ButtonLinkSquare } from "../styles/styled-components/button";

function PaginationNavigation({ pageContext, category, page }): ReactElement {
	//This code is a mess, but its working
	return (
		<nav
			style={{
				width: "100%",
				margin: "30px 0",
			}}
		>
			{pageContext.previousPagePath && (
				<ButtonLinkSquare
					to={
						category
							? pageContext.previousPagePath
							: `/${pageContext.previousPagePath}`
					}
					rel="prev"
				>
					<FaChevronLeft />
				</ButtonLinkSquare>
			)}
			{pageContext.numberOfPages > 3
				? pageContext.pageNumber === 0
					? [...new Array(3)].map((ele, i) => (
							<ButtonLinkSquare
								to={`/${page}/${
									category
										? "category/" +
										  pageContext.category +
										  "/"
										: ""
								}${i + 1 === 1 ? "" : i + 1}`}
								key={i}
							>
								{i + 1}
							</ButtonLinkSquare>
					  ))
					: [...new Array(pageContext.numberOfPages)]
							.map((ele, i) => (
								<ButtonLinkSquare
									to={`/${page}/${
										category
											? "category/" +
											  pageContext.category +
											  "/"
											: ""
									}${i + 1 === 1 ? "" : i + 1}`}
									key={i}
								>
									{i + 1}
								</ButtonLinkSquare>
							))
							.slice(
								pageContext.pageNumber - 1,
								pageContext.pageNumber + 2
							)
				: [...new Array(pageContext.numberOfPages)].map((ele, i) => (
						<ButtonLinkSquare
							to={`/${page}/${
								category
									? "category/" + pageContext.category + "/"
									: ""
							}${i + 1 === 1 ? "" : i + 1}`}
							key={i}
						>
							{i + 1}
						</ButtonLinkSquare>
				  ))}
			{pageContext.nextPagePath && (
				<ButtonLinkSquare
					to={
						category
							? pageContext.nextPagePath
							: `/${pageContext.nextPagePath}`
					}
					rel="next"
				>
					<FaChevronRight />
				</ButtonLinkSquare>
			)}
		</nav>
	);
}

export default PaginationNavigation;
