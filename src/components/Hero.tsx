import React, { ReactElement } from "react";
import {
	ImageOuterWrapper,
	Section,
	SectionInnerWrapper,
	TextContentWrapper,
} from "../styles/styled-components/hero";
import { ButtonLink } from "../styles/styled-components/button";
import { StaticImage } from "gatsby-plugin-image";

function Hero(): ReactElement {
	return (
		<Section>
			<SectionInnerWrapper>
				<ImageOuterWrapper>
					<StaticImage
						src={`../images/stock-meeting.png`}
						alt=""
					></StaticImage>
				</ImageOuterWrapper>
				<TextContentWrapper>
					<h1>What a great template</h1>
					<p>
						Consequat id irure enim incididunt nisi enim. Tempor
						reprehenderit proident laborum ipsum. Non laborum et
						aliquip culpa aliquip aliqua. Reprehenderit ex labore
						culpa sit id dolore elit. Officia amet incididunt sunt
						fugiat consequat occaecat aliqua ullamco anim in esse
						aute aliquip veniam.
					</p>
					<ButtonLink to="/shop">Check out the shop</ButtonLink>
				</TextContentWrapper>
			</SectionInnerWrapper>
		</Section>
	);
}

export default Hero;
