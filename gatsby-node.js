const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const blogPost = path.resolve(`./src/templates/blog-post.tsx`);
	const productPost = path.resolve(`./src/templates/product-post.tsx`);
	const blog = await graphql(
		`
			{
				allMdx(
					filter: { fileAbsolutePath: { regex: "/content/blog/" } }
					sort: { fields: [frontmatter___date], order: DESC }
					limit: 1000
				) {
					edges {
						node {
							id
							fields {
								slug
							}
							frontmatter {
								title
							}
							body
						}
					}
				}
			}
		`
	).then((result) => {
		if (result.errors) {
			throw result.errors;
		}
		// Create blog posts pages.
		const posts = result.data.allMdx.edges;

		posts.forEach((post, index) => {
			const previous =
				index === posts.length - 1 ? null : posts[index + 1].node;
			const next = index === 0 ? null : posts[index - 1].node;

			createPage({
				path: post.node.fields.slug,
				component: blogPost,
				context: {
					slug: post.node.fields.slug,
					previous,
					next,
				},
			});
		});
	});
	const product = await graphql(
		`
			{
				allMdx(
					filter: {
						fileAbsolutePath: { regex: "/content/products/" }
					}
					sort: { fields: [frontmatter___date], order: DESC }
					limit: 1000
				) {
					edges {
						node {
							id
							fields {
								slug
							}
							frontmatter {
								title
								path
							}
							body
						}
					}
				}
			}
		`
	).then((result) => {
		if (result.errors) {
			throw result.errors;
		}
		// Create blog posts pages.
		const posts = result.data.allMdx.edges;

		posts.forEach((post, index) => {
			const previous =
				index === posts.length - 1 ? null : posts[index + 1].node;
			const next = index === 0 ? null : posts[index - 1].node;

			createPage({
				path: post.node.frontmatter.path,
				component: productPost,
				context: {
					slug: post.node.fields.slug,
					previous,
					next,
				},
			});
		});
	});
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === `Mdx`) {
		const value = createFilePath({ node, getNode });
		createNodeField({
			name: `slug`,
			node,
			value,
		});
	}
};
