import React, { ReactElement } from "react";
import {
	InfomationContainer,
	InformationItem,
	Section,
} from "../styles/styled-components/contact";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { FaMapMarkerAlt, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";
function Contact(): ReactElement {
	return (
		<Layout color="beige">
			<SEO title="Home" />
			<Section>
				<h1>Entre em contato</h1>
			</Section>
			<InfomationContainer>
				<InformationItem>
					<FaWhatsapp />
					<p>+48 513 978 944</p>
				</InformationItem>
				<InformationItem>
					<FaRegEnvelope />
					<p>contact@franekmarciniak.pl</p>
				</InformationItem>
				<InformationItem>
					<FaMapMarkerAlt />
					<p>Poznań, Poland</p>
				</InformationItem>
			</InfomationContainer>
		</Layout>
	);
}

export default Contact;
