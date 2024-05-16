const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allContentfulProject {
        nodes {
          id
          title
        }
      }
    }
  `)

  result.data.allContentfulProject.nodes.forEach((node) => {
    createPage({
      path: `/${node.title}`,
      component: path.resolve(`./src/pages/{ContentfulProject.title}.js`),
      context: {
        id: node.id,
      },
    })
  })
}
