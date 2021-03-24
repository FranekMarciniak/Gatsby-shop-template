module.exports = {
	siteMetadata: {
		title: `ExamesRush`,
		author: {
			name: `Franciszek Marciniak`,
		},
		description: `A starter for building ecommerce sites with blog`,
		siteUrl: `http://localhost:8000/`,
	},
	plugins: [
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/products`,
				name: `products`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 630,
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`,
				],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		// {
		//   resolve: `gatsby-plugin-google-analytics`,
		//   options: {
		//     trackingId: `ADD YOUR TRACKING ID HERE`,
		//   },
		// },
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Gatsby Starter Ecommerce`,
				short_name: `ExamesRush`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/site-icon.png`, // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-gatsby-cloud`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1200,
						},
					},
				],
			},
		},
		{
			resolve: "gatsby-plugin-snipcart",
			options: {
				autopop: true,
				apiKey:
					"Yzk2MTRiZDMtNDYxZi00MmRkLThhOWQtN2M3MzNiMmJhNTQ4NjM3NTIxODM3NjE1OTAzMzMz",
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
