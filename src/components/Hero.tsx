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
					<h5>Porque seu tempo é importante.</h5>
					<h1>Nós Facilitamos os Exames!</h1>
					<p>
						Não só respostas de exames. Guias de preparo para
						certificação baseados em perguntas de exames reais,
						respostas 100% precisas e verificadas, explicações
						detalhadas, guias orientados por resultados, dicas
						práticas, e muito mais com ExamesRush. Tudo o que você
						precisa para obter sucesso rapidamente.
					</p>
					<ButtonLink to="/shop">Explore nossa biblioteca</ButtonLink>
				</TextContentWrapper>
			</SectionInnerWrapper>
		</Section>
	);
}

export default Hero;
