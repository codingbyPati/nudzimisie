require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })


  const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allContentfulPlay {
          edges {
            node {
              slug
              list
              title
              description {
                description
              }
            }
          }
        }
      }
    `
  )


  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }


  const playTemplate = path.resolve(`src/templates/PlayTemplate.tsx`)
  result.data.allContentfulPlay.edges.forEach(({ node }) => {
    const path = node.slug
    createPage({
      path,
      component: playTemplate,
      context: {
        pagePath: path,
        data: node
      },
    })
  })
}