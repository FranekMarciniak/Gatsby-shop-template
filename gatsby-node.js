const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { paginate } = require("gatsby-awesome-pagination");
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const blogPost = path.resolve(`./src/templates/blog-post.tsx`);
	const blogPage = path.resolve(`./src/templates/blog-page.tsx`);
	const productPost = path.resolve(`./src/templates/product-post.tsx`);
	const categorizedProductsPage = path.resolve(
		`./src/templates/categorized-products-page.tsx`
	);
	const productsPage = path.resolve(`./src/templates/products-page.tsx`);
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
								description
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
	const blogPostsPage = await graphql(
		`
			{
				allMdx(
					filter: { fileAbsolutePath: { regex: "/content/blog/" } }
				) {
					nodes {
						frontmatter {
							title
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
		// const posts = result.data.allMdx.groups;
		paginate({
			createPage,
			items: result.data.allMdx.nodes,
			itemsPerPage: 6,
			pathPrefix: "blog",
			component: blogPage,
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
								related
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
				path: "/library/product" + post.node.frontmatter.path,
				component: productPost,
				context: {
					slug: post.node.fields.slug,
					previous,
					next,
					related: post.node.frontmatter.related,
				},
			});
		});
	});
	const products = await graphql(
		`
			{
				allMdx(
					filter: {
						fileAbsolutePath: { regex: "/content/products/" }
					}
				) {
					nodes {
						frontmatter {
							title
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
		// const posts = result.data.allMdx.groups;
		paginate({
			createPage,
			items: result.data.allMdx.nodes,
			itemsPerPage: 9,
			pathPrefix: "library", // use category name for pages
			component: productsPage,
		});
	});
	const groupedProducts = await graphql(
		`
			{
				allMdx(
					filter: {
						fileAbsolutePath: { regex: "/content/products/" }
					}
				) {
					group(field: frontmatter___category) {
						nodes {
							frontmatter {
								category
							}
						}
						fieldValue
					}
				}
			}
		`
	).then((result) => {
		if (result.errors) {
			throw result.errors;
		}
		// Create blog posts pages.
		// const posts = result.data.allMdx.groups;

		result.data.allMdx.group.forEach(
			({ nodes: posts, fieldValue: category }) => {
				paginate({
					createPage,
					items: posts,
					itemsPerPage: 9,
					pathPrefix: "/library/category/" + category, // use category name for pages
					component: categorizedProductsPage,
					context: { category }, // your template for post lists
				});
			}
		);
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
