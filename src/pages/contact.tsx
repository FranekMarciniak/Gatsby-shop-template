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
					<p>+37281597253</p>
				</InformationItem>
				<InformationItem>
					<FaRegEnvelope />
					<p>info@yzydo.com</p>
				</InformationItem>
				<InformationItem>
					<FaMapMarkerAlt />
					<p>933 Alameda Araguaia, Sao Paulo</p>
				</InformationItem>
			</InfomationContainer>
		</Layout>
	);
}

export default Contact;
